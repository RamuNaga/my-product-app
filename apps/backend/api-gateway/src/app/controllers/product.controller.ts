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
import { status } from '@grpc/grpc-js';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import * as fs from 'fs';
import { CurrentUser, JwtAuthGuard } from '@my-product-app/backend-shared';
import { ProductGrpcClientService } from '@my-product-app/product';
import { CreateProductRequest } from '@my-product-app/backend-proto/generated';

const uploadPath = join(process.cwd(), 'uploads', 'products');
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
            `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`,
          );
        },
      }),
    }),
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
    @CurrentUser() user: any,
  ) {
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }

    //const relativePath = '/' + file.path.split(sep).slice(-3).join('/');
    const relativePath = `/uploads/products/${file.filename}`;

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
    } catch (err: unknown) {
      // Remove the uploaded file if Product creation fails.
      try {
        fs.unlinkSync(file.path);
      } catch (cleanupError) {
        console.warn('Failed to delete uploaded product file:', cleanupError);
      }

      const grpcError = err as {
        code?: number | string;
        message?: string;
        details?: string;
      };

      const grpcCode = Number(grpcError?.code);

      const message =
        grpcError?.details || grpcError?.message || 'Internal server error';

      switch (grpcCode) {
        case status.INVALID_ARGUMENT:
          throw new HttpException(message, HttpStatus.BAD_REQUEST);

        case status.ALREADY_EXISTS:
          throw new HttpException(message, HttpStatus.CONFLICT);

        case status.NOT_FOUND:
          throw new HttpException(message, HttpStatus.NOT_FOUND);

        case status.RESOURCE_EXHAUSTED:
          throw new HttpException(
            'Service resource limit reached',
            HttpStatus.SERVICE_UNAVAILABLE,
          );

        default:
          console.error('Product creation gRPC error:', err);

          throw new HttpException(
            'Internal server error while creating product',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      }
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
