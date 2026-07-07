import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { CreateProductInput } from '@my-product-app/backend-graphql-types';
import { ProductPrismaService } from '@my-product-app/backend-prisma/product-prisma';
import { Prisma } from '@my-product-app/backend-prisma/product-client';

@Injectable()
export class ProductService {
  constructor(private prisma: ProductPrismaService) {}

  async create(data: CreateProductInput) {
    try {
      const product = await this.prisma.client.product.create({
        data,
      });
      return product;
    } catch (error: any) {
      // Prisma unique constraint violation
      console.log('Prisma unique constraint violation calling');
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Product code already exists');
      }

      // Log and rethrow as generic internal error
      console.error('Create product failed:', error);
      throw new InternalServerErrorException('Could not create product');
    }
  }

  findAll() {
    return this.prisma.client.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAllProducts() {
    const products = await this.prisma.client.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return products.map((p) => ({
      ...p,
      image: p.image ?? '',
    }));
  }

  findOne(id: number) {
    return this.prisma.client.product.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Partial<CreateProductInput>) {
    return this.prisma.client.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.client.product.delete({
      where: { id },
    });
  }
}
