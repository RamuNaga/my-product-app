import { Injectable } from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { CreateWorkorderInput } from '../dto/create-workoder.input';
import { UpdateWorkorderInput } from '../dto/update-workorder.input';

@Injectable()
export class WorkorderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateWorkorderInput, userId: number) {
    const product = await this.prisma.product.findUnique({
      where: { productcode: data.productCode },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return this.prisma.workOrder.create({
      data: {
        productId: product.id,
        clientLocation: data.clientLocation,
        vendorOrClient: data.vendorOrClient,
        quantity: data.quantity,
        productWeight: data.productWeight,
        deliveryDate: data.deliveryDate,
        description: data.description,
        createdById: userId,
        status: 'Requested',
      },
    });
  }

  findAll() {
    return this.prisma.workOrder.findMany();
  }

  findOne(id: number) {
    return this.prisma.workOrder.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateWorkorderInput) {
    return this.prisma.workOrder.update({ where: { id }, data });
  }
}
