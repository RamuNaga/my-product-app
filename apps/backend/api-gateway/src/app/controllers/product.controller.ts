import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join, sep } from 'path';
import * as fs from 'fs';
import { CurrentUser, JwtAuthGuard } from '@my-product-app/backend-shared';
import { ProductGrpcClientService } from '@my-product-app/product';
import { CreateProductRequest } from '@my-product-app/backend-proto/generated';

const uploadPath = join(__dirname, '../../../../uploads/products');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {
  constructor(private readonly productGrpcClient: ProductGrpcClientService) {}

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
      const grpcData: CreateProductRequest = {
        productCode: body.productCode,
        name: body.name,
        description: body.description,
        image: relativePath,
        productWeight: body.productWeight,
        price: body.price,
        companyId: user.companyId,
      };

      //  Await the gRPC promise
      const result = await this.productGrpcClient.createProduct(grpcData);

      return { status: 'success', data: result.product };
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : (err as any)?.message ||
            (err as any)?.response?.message ||
            'Internal server error';
      console.log('ProductController message', message);

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

  // @Public()
  // @Get()
  // async findAll() {
  //   console.log('Fetching all products, findAll in api-gateway is called');
  //   const result = await this.productGrpcClient.getAllProducts();
  //   return result.products; // products array from ProductListResponse
  // }
}
