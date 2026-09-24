import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { CreateProductInput } from '@my-product-app/backend-graphql-types';

import {
  ProductPrismaService,
  Prisma,
  Product,
} from '@my-product-app/backend-prisma/product-prisma';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: ProductPrismaService) {}

  async create(data: CreateProductInput): Promise<Product> {
    try {
      return await this.prisma.client.product.create({
        data,
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Product code already exists');
      }

      console.error('Create product failed:', error);

      throw new InternalServerErrorException(
        'Could not create product'
      );
    }
  }

  findAll(): Promise<Product[]> {
    return this.prisma.client.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAllProducts(): Promise<
    Array<Product & { image: string }>
  > {
    const products =
      await this.prisma.client.product.findMany({
        orderBy: { createdAt: 'desc' },
      });

    return products.map((product) => ({
      ...product,
      image: product.image ?? '',
    }));
  }

  findOne(id: number): Promise<Product | null> {
    return this.prisma.client.product.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    data: Partial<CreateProductInput>
  ): Promise<Product> {
    return this.prisma.client.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number): Promise<Product> {
    return this.prisma.client.product.delete({
      where: { id },
    });
  }
}