import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateProductRequest,
  ProductResponse,
  ProductListResponse,
  EmptyRequest,
} from '@my-product-app/backend-proto/generated';
import { ProductPrismaService } from '@my-product-app/backend-prisma/product-prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProductGrpcService {
  constructor(private readonly prisma: ProductPrismaService) {}

  // ----------------------------
  // CREATE PRODUCT
  // ----------------------------
  async createProduct(request: CreateProductRequest): Promise<ProductResponse> {
    try {
      const product = await this.prisma.product.create({
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

      //  Return a single ProductResponse with nested Product
      return {
        product: this.mapToProtoProduct(product),
      };
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Product code already exists');
      }

      console.error(' Create product failed:', error);
      throw new InternalServerErrorException('Could not create product');
    }
  }

  // ----------------------------
  // GET ALL PRODUCTS
  // ----------------------------
  async getAllProducts(_: EmptyRequest): Promise<ProductListResponse> {
    console.log('getAllProducts in ProductGrpcService is called');
    const products = await this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return {
      products: products.map((p) => this.mapToProtoProduct(p)),
    };
  }

  // ----------------------------
  // GET PRODUCT BY ID
  // ----------------------------
  async getProductById({
    value,
  }: {
    value?: number;
  }): Promise<ProductResponse> {
    if (!value) throw new NotFoundException('Product ID not provided');

    const product = await this.prisma.product.findUnique({
      where: { id: value },
    });

    if (!product) throw new NotFoundException('Product not found');

    return {
      product: this.mapToProtoProduct(product),
    };
  }

  // ----------------------------
  // MAPPER
  // ----------------------------
  private mapToProtoProduct(product: any) {
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
