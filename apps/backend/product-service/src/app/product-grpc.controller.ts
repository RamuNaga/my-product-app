import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from '@my-product-app/product';
import { CreateProductRequest } from '@my-product-app/backend-proto';

@Controller()
export class ProductGrpcController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'CreateProduct')
  async createProduct(data: CreateProductRequest) {
    return this.productService.create(data);
  }
  // No use of this method now, since we are using ProductResolver in product module
  // to handle fetching products via GraphQL
  // But keeping it here for reference or future use if needed
  @GrpcMethod('ProductService', 'FindAllProducts')
  async getAllProducts() {
    console.log('@GrpcMethod getAllProducts  in  ProductGrpcController');
    return this.productService.findAll();
  }
}
