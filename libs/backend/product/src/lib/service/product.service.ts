import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { CreateProductInput } from '@my-product-app/backend-graphql-types';
import { ProductPrismaService } from '@my-product-app/backend-prisma/product-prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProductService {
  constructor(private prisma: ProductPrismaService) {}

  async create(data: CreateProductInput) {
    try {
      const product = await this.prisma.product.create({
        data,
      });
      return product;
    } catch (error) {
      // Prisma unique constraint violation
      console.log('Prisma unique constraint violation calling');
      if (
        error instanceof PrismaClientKnownRequestError &&
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
    return this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getAllProducts() {
    const products = await this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return products.map((p) => ({
      ...p,
      image: p.image ?? '',
    }));
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Partial<CreateProductInput>) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
