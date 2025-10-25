import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductGrpcService } from './product-grpc.service';
import {
  CreateProductRequest,
  ProductListResponse,
  EmptyRequest,
} from '@my-product-app/backend-proto/generated';

@Controller()
export class ProductGrpcController {
  constructor(private readonly productService: ProductGrpcService) {}

  @GrpcMethod('ProductService', 'CreateProduct')
  async createProduct(data: CreateProductRequest) {
    console.log(
      '@GrpcMethod createProduct  in  ProductGrpcController in Product-service microservice is calling/not calling',
      data
    );
    return this.productService.createProduct(data);
  }
  // No use of this method now, since we are using ProductResolver in product module
  // to handle fetching products via GraphQL
  // But keeping it here for reference or future use if needed
  @GrpcMethod('ProductService', 'GetAllProducts')
  async getAllProducts(data: EmptyRequest): Promise<ProductListResponse> {
    console.log('@GrpcMethod GetAllProducts called with data:', data);

    const products = await this.productService.getAllProducts(data);
    return products;
  }
}
