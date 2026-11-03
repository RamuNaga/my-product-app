import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

import {
  CreateProductRequest,
  ProductResponse,
  ProductListResponse,
  EmptyRequest,
} from '@my-product-app/backend-proto/generated';

import {
  ProductPrismaService,
  Prisma,
} from '@my-product-app/backend-prisma/product-prisma';

@Injectable()
export class ProductGrpcService {
  private readonly logger = new Logger(ProductGrpcService.name);

  constructor(private readonly prisma: ProductPrismaService) {}

  // ----------------------------
  // CREATE PRODUCT
  // ----------------------------
  async createProduct(request: CreateProductRequest): Promise<ProductResponse> {
    try {
      const product = await this.prisma.client.product.create({
        data: {
          productCode: request.productCode,
          name: request.name,
          description: request.description,
          image: request.image,
          productWeight: request.productWeight,
          price: request.price,
          companyId: request.companyId ?? null,
        },
      });

      return {
        product: this.mapToProtoProduct(product),
      };
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new RpcException({
          code: status.ALREADY_EXISTS,
          message: 'Product code already exists',
        });
      }

      this.logger.error(
        'Create product failed',
        error instanceof Error ? error.stack : String(error),
      );

      throw new RpcException({
        code: status.INTERNAL,
        message: 'Could not create product',
      });
    }
  }

  // ----------------------------
  // GET ALL PRODUCTS
  // ----------------------------
  async getAllProducts(_: EmptyRequest): Promise<ProductListResponse> {
    try {
      const products = await this.prisma.client.product.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return {
        products: products.map((product) => this.mapToProtoProduct(product)),
      };
    } catch (error: unknown) {
      this.logger.error(
        'Get all products failed',
        error instanceof Error ? error.stack : String(error),
      );

      throw new RpcException({
        code: status.INTERNAL,
        message: 'Could not retrieve products',
      });
    }
  }

  // ----------------------------
  // GET PRODUCT BY ID
  // ----------------------------
  async getProductById({
    value,
  }: {
    value?: number;
  }): Promise<ProductResponse> {
    if (typeof value !== 'number' || !Number.isInteger(value) || value <= 0) {
      throw new RpcException({
        code: status.INVALID_ARGUMENT,
        message: 'A valid Product ID is required',
      });
    }

    try {
      const product = await this.prisma.client.product.findUnique({
        where: { id: value },
      });

      if (!product) {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: 'Product not found',
        });
      }

      return {
        product: this.mapToProtoProduct(product),
      };
    } catch (error: unknown) {
      // Preserve intentional gRPC errors.
      if (error instanceof RpcException) {
        throw error;
      }

      this.logger.error(
        'Get product by ID failed',
        error instanceof Error ? error.stack : String(error),
      );

      throw new RpcException({
        code: status.INTERNAL,
        message: 'Could not retrieve product',
      });
    }
  }

  // ----------------------------
  // MAPPER
  // ----------------------------
  private mapToProtoProduct(
    product: Prisma.ProductGetPayload<Record<string, never>>,
  ) {
    return {
      id: product.id,
      productCode: product.productCode,
      name: product.name,
      description: product.description ?? '',
      image: product.image ?? '',
      productWeight: product.productWeight,
      price: product.price,
      companyId: product.companyId ?? 0,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    };
  }
}
