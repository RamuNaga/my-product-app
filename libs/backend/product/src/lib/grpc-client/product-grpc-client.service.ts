import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  GrpcCorrelationMetadataService,
  PRODUCT_SERVICE,
} from '@my-product-app/backend-shared';
import {
  ProductServiceClient,
  CreateProductRequest,
  ProductResponse,
  EmptyRequest,
  ProductListResponse,
  PRODUCT_SERVICE_NAME,
} from '@my-product-app/backend-proto/generated';
import { CreateProductInput } from '@my-product-app/backend-graphql-types';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductGrpcClientService implements OnModuleInit {
  private productService!: ProductServiceClient;

  constructor(
    @Inject(PRODUCT_SERVICE) private readonly client: ClientGrpc,
    private readonly grpcMetadata: GrpcCorrelationMetadataService,
  ) {}

  onModuleInit() {
    this.productService =
      this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME);
  }

  createProduct(data: CreateProductInput): Promise<ProductResponse> {
    console.log(
      'ProductGrpcClientService Creating product with data is calling:',
      data,
    );
    return lastValueFrom(
      this.productService.createProduct(
        data as CreateProductRequest,
        this.grpcMetadata.create(),
      ),
    );
  }

  getProductById(id: number): Promise<ProductResponse> {
    return lastValueFrom(
      this.productService.getProductById(
        { value: id },
        this.grpcMetadata.create(),
      ),
    );
  }

  getAllProducts(): Promise<ProductListResponse> {
    console.log('getAllProducts in ProductGrpcClientService is calling');
    return lastValueFrom(
      this.productService.getAllProducts(
        {} as EmptyRequest,
        this.grpcMetadata.create(),
      ),
    );
  }
}
