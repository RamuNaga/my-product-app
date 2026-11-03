import { UseGuards, Logger } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { status } from '@grpc/grpc-js';
import { GraphQLError } from 'graphql';

import {
  Product,
  CreateProductInput,
} from '@my-product-app/backend-graphql-types';

import { ProductGrpcClientService } from '@my-product-app/product';
import { JwtAuthGuard } from '@my-product-app/backend-shared';

type GrpcError = {
  code?: number;
  details?: string;
  message?: string;
};

@UseGuards(JwtAuthGuard)
@Resolver(() => Product)
export class ProductResolver {
  private readonly logger = new Logger(ProductResolver.name);

  constructor(private readonly productGrpcClient: ProductGrpcClientService) {}

  @Query(() => [Product], { name: 'products' })
  async products(): Promise<Product[]> {
    try {
      const res = await this.productGrpcClient.getAllProducts();

      return res.products.map((product) => ({
        ...product,
        image: product.image ?? '',
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
      })) as Product[];
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to fetch products');
    }
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('input') input: CreateProductInput,
  ): Promise<Product> {
    try {
      const res = await this.productGrpcClient.createProduct(input);

      const product = res.product;

      if (!product) {
        throw new GraphQLError(
          'Product Service returned an empty product response',
          {
            extensions: {
              code: 'INTERNAL_SERVER_ERROR',
            },
          },
        );
      }

      return {
        ...product,
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
      } as Product;
    } catch (error: unknown) {
      this.throwGraphQLError(error, 'Failed to create product');
    }
  }

  private throwGraphQLError(error: unknown, fallbackMessage: string): never {
    const grpcError = error as GrpcError;

    const grpcCode = Number(grpcError?.code);

    switch (grpcCode) {
      case status.INVALID_ARGUMENT:
        throw new GraphQLError(grpcError.details || 'Invalid product data', {
          extensions: {
            code: 'BAD_USER_INPUT',
            grpcCode,
          },
        });

      case status.ALREADY_EXISTS:
        throw new GraphQLError(grpcError.details || 'Product already exists', {
          extensions: {
            code: 'CONFLICT',
            grpcCode,
          },
        });

      case status.NOT_FOUND:
        throw new GraphQLError(grpcError.details || 'Product not found', {
          extensions: {
            code: 'NOT_FOUND',
            grpcCode,
          },
        });

      default:
        this.logger.error(
          fallbackMessage,
          error instanceof Error ? error.stack : String(error),
        );

        throw new GraphQLError(fallbackMessage, {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
          },
        });
    }
  }
}
