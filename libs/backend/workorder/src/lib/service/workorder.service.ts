import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { CreateWorkorderInput } from '../dto/create-workoder.input';
import { UpdateWorkorderInput } from '../dto/update-workorder.input';
import { ApproveWorkorderInput } from '../dto/approve-workorder.input';
import { WorkOrderStatus } from '@prisma/client';

@Injectable()
export class WorkOrderService {
  constructor(private readonly prisma: PrismaService) {}

  // Helper method to generate WorkOrderCode
  private async generateWorkOrderCode(): Promise<string> {
    const today = new Date();
    const datePart = `${String(today.getFullYear()).slice(-2)}${String(
      today.getMonth() + 1
    ).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

    // Count existing work orders created today
    const countToday = await this.prisma.workOrder.count({
      where: {
        createdAt: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          lt: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1
          ),
        },
      },
    });

    const sequence = String(countToday + 1).padStart(2, '0');
    return `W${datePart}${sequence}`;
  }

  async create(data: CreateWorkorderInput, userId: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: data.productId },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const workOrderCode = await this.generateWorkOrderCode();

    return this.prisma.workOrder.create({
      data: {
        workOrderCode,
        productId: product.id,
        clientLocation: data.clientLocation,
        vendorOrClient: data.vendorOrClient,
        quantity: data.quantity,
        deliveryDate: data.deliveryDate,
        description: data.description,
        createdById: userId,
      },
    });
  }

  async approveWorkorder(input: ApproveWorkorderInput, approvedById: number) {
    const { id, priority, attachments, assignedTo, comments, status } = input;

    const workorder = await this.prisma.workOrder.findUnique({ where: { id } });
    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }

    if (
      workorder.status !== WorkOrderStatus.REQUESTED &&
      status === WorkOrderStatus.APPROVED
    ) {
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
      updatedAt: new Date(),
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
  // , userId: number in furture userId means currentUser who is cancelled this workorder
  async cancel(id: number) {
    const workorder = await this.prisma.workOrder.findUnique({ where: { id } });

    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }

    return this.prisma.workOrder.update({
      where: { id },
      data: {
        status: WorkOrderStatus.CANCELLED,
        updatedAt: new Date(),
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
        updatedAt: new Date(),
      },
    });
  }
}
