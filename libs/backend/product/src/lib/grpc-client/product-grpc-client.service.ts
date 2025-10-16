import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from '@my-product-app/backend-shared';
import {
  ProductServiceClient,
  CreateProductRequest,
  ProductResponse,
  EmptyRequest,
  ProductListResponse,
} from '@my-product-app/backend-proto/generated';
import { CreateProductInput } from '../dto/create-product.input';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductGrpcClientService implements OnModuleInit {
  private productService!: ProductServiceClient;

  constructor(@Inject(PRODUCT_SERVICE) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.productService =
      this.client.getService<ProductServiceClient>('ProductService');
  }

  createProduct(data: CreateProductInput): Promise<ProductResponse> {
    console.log('Creating product with data is calling:', data);
    return firstValueFrom(
      this.productService.createProduct(data as CreateProductRequest)
    );
  }

  getProductById(id: number): Promise<ProductResponse> {
    return firstValueFrom(this.productService.getProductById({ value: id }));
  }

  getAllProducts(): Promise<ProductListResponse> {
    return firstValueFrom(
      this.productService.getAllProducts({} as EmptyRequest)
    );
  }
}
