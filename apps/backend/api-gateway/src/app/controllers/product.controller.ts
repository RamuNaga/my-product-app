import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  Inject,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ClientProxy } from '@nestjs/microservices';
import { diskStorage } from 'multer';
import { extname, join, sep } from 'path';
import * as fs from 'fs';
import { Observable } from 'rxjs';

const uploadPath = join(__dirname, '../../../../uploads/products');

// Ensure the folder exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

@Controller('products')
export class ProductController {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy
  ) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: uploadPath,
        filename: (_req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            file.fieldname + '-' + uniqueSuffix + extname(file.originalname)
          );
        },
      }),
    })
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any
  ) {
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }

    try {
      //  Convert absolute file path to relative public URL
      // Example: E:\project\uploads\products\file.png -> /uploads/products/file.png
      const parts = file.path.split(sep); // handles Windows `\` and Unix `/`
      const uploadsIndex = parts.lastIndexOf('uploads');
      const relativePath = '/' + parts.slice(uploadsIndex).join('/');
      console.log('@62 relativePath', relativePath);

      const result = await this.productClient
        .send(
          { cmd: 'create_product' },
          {
            ...body,
            imagePath: relativePath, // Send only relative path
          }
        )
        .toPromise();

      return result;
    } catch (err) {
      console.error('Microservice call failed:', err);
      try {
        fs.unlinkSync(file.path); // Clean up file if save failed
      } catch (unlinkErr) {
        console.warn(
          'Failed to delete file after microservice error',
          unlinkErr
        );
      }

      throw new HttpException(
        'Internal server error while creating product',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get()
  findAll(): Observable<any> {
    return this.productClient.send({ cmd: 'get_all_products' }, {});
  }
}
