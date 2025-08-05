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
import { CurrentUser } from '@my-product-app/backend-shared';

const uploadPath = join(__dirname, '../../../../uploads/products');
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
            `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`
          );
        },
      }),
    })
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body()
    body: {
      productCode: string;
      name: string;
      description: string;
      productWeight: string;
      price: number;
    },
    @CurrentUser() user: any
  ) {
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }

    const relativePath = '/' + file.path.split(sep).slice(-3).join('/');

    try {
      const result = await this.productClient
        .send(
          { cmd: 'create_product' },
          { ...body, imagePath: relativePath, companyId: user.companyId }
        )
        .toPromise();

      return result;
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : (err as any)?.message ||
            (err as any)?.response?.message ||
            'Internal server error';
      console.log('ProductController  message', message);

      try {
        fs.unlinkSync(file.path);
      } catch {
        console.warn('Failed to delete file after microservice error', err);
      }

      if (message === 'Product code already exists') {
        throw new HttpException(message, HttpStatus.CONFLICT);
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
