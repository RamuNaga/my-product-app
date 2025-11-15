import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateWorkOrderRequest,
  WorkOrderResponse,
  GetWorkOrdersRequest,
  GetWorkOrdersResponse,
  UpdateWorkOrderRequest,
  ApproveWorkOrderRequest,
  ApproveWorkOrderResponse,
  ProtoWorkOrderStatus,
  ProtoWorkOrder,
  ProtoPriority,
} from '@my-product-app/backend-proto/generated';
import { WorkorderPrismaService } from '@my-product-app/backend-prisma/workorder-prisma';
import { dateToTimestamp } from '@my-product-app/backend-shared';
import { mapEnum } from '@my-product-app/backend-shared-mappers';

import {
  WorkOrderStatus as PrismaWorkOrderStatus,
  Priority as PrismaPriority,
} from '@my-product-app/backend-prisma/workorder-client';
import { RpcException } from '@nestjs/microservices';

/**
 * Prisma → Proto
 */
export function mapPrismaWorkOrderStatusToProto(
  status: PrismaWorkOrderStatus
): ProtoWorkOrderStatus {
  return mapEnum(
    {
      [PrismaWorkOrderStatus.REQUESTED]:
        ProtoWorkOrderStatus.WORK_ORDER_REQUESTED,
      [PrismaWorkOrderStatus.PENDING]: ProtoWorkOrderStatus.WORK_ORDER_PENDING,
      [PrismaWorkOrderStatus.APPROVED]:
        ProtoWorkOrderStatus.WORK_ORDER_APPROVED,
      [PrismaWorkOrderStatus.REJECTED]:
        ProtoWorkOrderStatus.WORK_ORDER_REJECTED,
      [PrismaWorkOrderStatus.COMPLETED]:
        ProtoWorkOrderStatus.WORK_ORDER_COMPLETED,
      [PrismaWorkOrderStatus.CANCELLED]:
        ProtoWorkOrderStatus.WORK_ORDER_CANCELLED,
    },
    status,
    ProtoWorkOrderStatus.WORK_ORDER_REQUESTED
  );
}

function mapProtoStatusToPrisma(
  status: ProtoWorkOrderStatus
): PrismaWorkOrderStatus {
  switch (status) {
    case ProtoWorkOrderStatus.WORK_ORDER_REQUESTED:
      return PrismaWorkOrderStatus.REQUESTED;
    case ProtoWorkOrderStatus.WORK_ORDER_PENDING:
      return PrismaWorkOrderStatus.PENDING;
    case ProtoWorkOrderStatus.WORK_ORDER_APPROVED:
      return PrismaWorkOrderStatus.APPROVED;
    case ProtoWorkOrderStatus.WORK_ORDER_REJECTED:
      return PrismaWorkOrderStatus.REJECTED;
    case ProtoWorkOrderStatus.WORK_ORDER_COMPLETED:
      return PrismaWorkOrderStatus.COMPLETED;
    case ProtoWorkOrderStatus.WORK_ORDER_CANCELLED:
      return PrismaWorkOrderStatus.CANCELLED;
    default:
      return PrismaWorkOrderStatus.REQUESTED;
  }
}

export function mapProtoPriorityToPrisma(
  priority: ProtoPriority
): PrismaPriority {
  switch (priority) {
    case ProtoPriority.PRIORITY_LOW:
      return PrismaPriority.LOW;
    case ProtoPriority.PRIORITY_MEDIUM:
      return PrismaPriority.MEDIUM;
    case ProtoPriority.PRIORITY_HIGH:
      return PrismaPriority.HIGH;
    default:
      return PrismaPriority.LOW;
  }
}

export function mapWorkOrderEntityToProto(workOrder: any): ProtoWorkOrder {
  return {
    id: workOrder.id,
    workOrderCode: workOrder.workOrderCode,
    productId: workOrder.productId,
    clientLocation: workOrder.clientLocation ?? '',
    vendorOrClient: workOrder.vendorOrClient ?? '',
    quantity: workOrder.quantity,
    deliveryDate: workOrder.deliveryDate
      ? dateToTimestamp(workOrder.deliveryDate)
      : undefined,
    description: workOrder.description ?? '',
    status: mapPrismaWorkOrderStatusToProto(workOrder.status),
    createdById: workOrder.createdById,
    approvedById: workOrder.approvedById ?? undefined,
    companyId: workOrder.companyId ?? undefined,
    priority: workOrder.priority,
    attachments: workOrder.attachments ?? [],
    assignedTo: workOrder.assignedTo ?? '',
    comments: workOrder.comments ?? '',
    createdAt: workOrder.createdAt
      ? dateToTimestamp(workOrder.createdAt)
      : undefined,
    updatedAt: workOrder.updatedAt
      ? dateToTimestamp(workOrder.updatedAt)
      : undefined,
  };
}

@Injectable()
export class WorkOrderGrpcService {
  constructor(private readonly prisma: WorkorderPrismaService) {}

  // ---------------- Helper: Generate WorkOrderCode ----------------
  private async generateWorkOrderCode(): Promise<string> {
    const today = new Date();
    const datePart = `${String(today.getFullYear()).slice(-2)}${String(
      today.getMonth() + 1
    ).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

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

  // ---------------- Create WorkOrder ----------------
  async createWorkOrder(
    request: CreateWorkOrderRequest
  ): Promise<WorkOrderResponse> {
    const workOrderCode = await this.generateWorkOrderCode();

    const cleanData: any = {
      workOrderCode,
      clientLocation: request.clientLocation,
      vendorOrClient: request.vendorOrClient,
      quantity: request.quantity,

      description: request.description || null,
      createdById: request.createdById,
      productId: request.productId,
      status:
        mapProtoStatusToPrisma(request.status) ||
        PrismaWorkOrderStatus.REQUESTED,
    };

    // only include deliveryDate if present
    if (request.deliveryDate) {
      cleanData.deliveryDate = new Date(request.deliveryDate.seconds * 1000);
    }

    const workOrderEntity = await this.prisma.workOrder.create({
      data: cleanData,
    });

    console.log(
      '[WorkOrderGrpcService:createWorkOrder] created:',
      workOrderEntity
    );

    return { workOrder: mapWorkOrderEntityToProto(workOrderEntity) };
  }

  // ---------------- Get WorkOrder By ID ----------------
  async getWorkOrderById(id: number): Promise<WorkOrderResponse> {
    const workOrderEntity = await this.prisma.workOrder.findUnique({
      where: { id },
    });

    if (!workOrderEntity) {
      throw new NotFoundException(`WorkOrder with id ${id} not found`);
    }

    return { workOrder: mapWorkOrderEntityToProto(workOrderEntity) };
  }

  // ---------------- Get WorkOrders (with filters + pagination) ----------------
  async getWorkOrders(
    request: GetWorkOrdersRequest
  ): Promise<GetWorkOrdersResponse> {
    console.log('[WorkOrderGrpcService:getWorkOrders] request:', request);
    try {
      const page = request.page ?? 1;
      const pageSize = request.pageSize ?? 10;

      const where: any = {};

      if (request.workOrderCode) {
        where.workOrderCode = {
          contains: request.workOrderCode,
          mode: 'insensitive',
        };
      }

      if (request.clientLocation) {
        where.clientLocation = { equals: request.clientLocation };
      }

      if (request.vendorOrClient) {
        where.vendorOrClient = { equals: request.vendorOrClient };
      }

      if (request.status !== undefined) {
        //  Convert from Proto enum → Prisma enum
        where.status = mapProtoStatusToPrisma(request.status);
      }

      console.log(
        '[WorkOrderGrpcService:getWorkOrders] prisma where filter:',
        where
      );

      const totalCount = await this.prisma.workOrder.count({ where });

      const workOrders = await this.prisma.workOrder.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      });

      //  Convert each entity to Proto-compatible object
      const protoWorkOrders = workOrders.map(mapWorkOrderEntityToProto);

      return { workOrders: protoWorkOrders, totalCount };
    } catch (error: unknown) {
      console.error('[WorkOrderGrpcService:getWorkOrders] ERROR:', error);

      const message =
        error instanceof Error ? error.message : 'Failed to fetch work orders';

      throw new RpcException({
        code: 13, // INTERNAL
        message,
      });
    }
  }

  // ---------------- Update WorkOrder ----------------
  async updateWorkOrder(
    request: UpdateWorkOrderRequest
  ): Promise<WorkOrderResponse> {
    const existing = await this.prisma.workOrder.findUnique({
      where: { id: request.workOrderId },
    });

    if (!existing) {
      throw new NotFoundException('WorkOrder not found');
    }

    const data: any = {
      productId: request.productId,
      clientLocation: request.clientLocation,
      vendorOrClient: request.vendorOrClient,
      quantity: request.quantity,
      deliveryDate: request.deliveryDate
        ? new Date(request.deliveryDate.seconds * 1000)
        : undefined, // undefined instead of existing.deliveryDate
      description: request.description ?? undefined,
      createdById: request.createdById,
      updatedAt: new Date(),
    };

    // Only assign optional fields if they exist
    if (request.status !== undefined) {
      data.status = mapProtoStatusToPrisma(request.status);
    }

    if (request.priority !== undefined) {
      data.priority = mapProtoPriorityToPrisma(request.priority);
    }

    if (request.approvedById !== undefined) {
      data.approvedById = request.approvedById;
    }

    if (request.companyId !== undefined) {
      data.companyId = request.companyId;
    }

    if (request.attachments !== undefined) {
      data.attachments = request.attachments;
    }

    if (request.assignedTo !== undefined) {
      data.assignedTo = request.assignedTo;
    }

    if (request.comments !== undefined) {
      data.comments = request.comments;
    }

    const updatedWorkOrder = await this.prisma.workOrder.update({
      where: { id: request.workOrderId },
      data,
    });

    return { workOrder: mapWorkOrderEntityToProto(updatedWorkOrder) };
  }

  // ---------------- Approve WorkOrder ----------------
  async approveWorkOrder(
    request: ApproveWorkOrderRequest
  ): Promise<ApproveWorkOrderResponse> {
    const workorder = await this.prisma.workOrder.findUnique({
      where: { id: request.workOrderId },
    });

    if (!workorder) {
      throw new NotFoundException('WorkOrder not found');
    }

    if (
      workorder.status !== PrismaWorkOrderStatus.REQUESTED &&
      request.status ===
        mapPrismaWorkOrderStatusToProto(PrismaWorkOrderStatus.APPROVED)
    ) {
      throw new BadRequestException(
        `Cannot approve workorder with status: ${workorder.status}`
      );
    }

    if (request.attachments && !Array.isArray(request.attachments)) {
      throw new BadRequestException('Attachments must be an array of strings');
    }

    const updateData: any = {
      status: request.status,
      approvedById: request.approvedById,
      updatedAt: new Date(),
    };

    if (request.priority !== undefined) updateData.priority = request.priority;
    if (request.attachments !== undefined)
      updateData.attachments = request.attachments;
    if (request.assignedTo !== undefined)
      updateData.assignedTo = request.assignedTo;
    if (request.comments !== undefined) updateData.comments = request.comments;

    const approveWorkOder = await this.prisma.workOrder.update({
      where: { id: request.workOrderId },
      data: updateData,
    });

    return { workOrder: mapWorkOrderEntityToProto(approveWorkOder) };
  }
}
