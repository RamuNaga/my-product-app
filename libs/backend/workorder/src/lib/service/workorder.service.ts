import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { CreateWorkorderInput } from '../dto/create-workoder.input';
import { UpdateWorkorderInput } from '../dto/update-workorder.input';
import { ApproveWorkorderInput } from '../dto/approve-workorder.input';

@Injectable()
export class WorkOrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateWorkorderInput, userId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: data.productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
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

  async approveWorkorder(input: ApproveWorkorderInput, approvedById: number) {
    const { id, priority, attachments, assignedTo, comments, status } = input;

    const workorder = await this.prisma.workOrder.findUnique({ where: { id } });
    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }

    if (workorder.status !== 'Requested' && status === 'Approved') {
      throw new BadRequestException(
        `Cannot approve workorder with status: ${workorder.status}`
      );
    }

    if (attachments !== undefined && !Array.isArray(attachments)) {
      throw new BadRequestException('Attachments must be an array of strings');
    }

    const updateData: any = {
      status,
      approvedById,
      updateDate: new Date(),
    };

    if (priority !== undefined) updateData.priority = priority;
    if (attachments !== undefined) updateData.attachments = attachments;
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo;
    if (comments !== undefined) updateData.comments = comments;

    return this.prisma.workOrder.update({
      where: { id },
      data: updateData,
    });
  }

  async cancel(id: number, userId: number) {
    const workorder = await this.prisma.workOrder.findUnique({ where: { id } });

    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }

    return this.prisma.workOrder.update({
      where: { id },
      data: {
        status: 'Cancelled',
        updateDate: new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.workOrder.findMany();
  }

  async findOne(id: number) {
    const workorder = await this.prisma.workOrder.findUnique({ where: { id } });
    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }
    return workorder;
  }

  async update(id: number, data: UpdateWorkorderInput) {
    const workorder = await this.prisma.workOrder.findUnique({ where: { id } });
    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }

    return this.prisma.workOrder.update({
      where: { id },
      data: {
        ...data,
        updateDate: new Date(),
      },
    });
  }
}
