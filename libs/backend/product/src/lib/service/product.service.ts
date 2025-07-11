import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { CreateProductInput } from '../dto/create-product.input';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductInput) {
    try {
      return await this.prisma.product.create({ data });
    } catch (error) {
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
    return this.prisma.product.findMany();
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
