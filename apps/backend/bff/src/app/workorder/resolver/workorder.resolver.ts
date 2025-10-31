import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { WorkOrderGrpcClientService } from '@my-product-app/workorder';
import {
  CreateWorkorderInput,
  WorkOrder,
  WorkordersResponse,
  UpdateWorkorderInput,
  ApproveWorkorderInput,
} from '@my-product-app/backend-graphql-types';
import {
  UserRole,
  WorkOrderStatus,
} from '@my-product-app/backend-shared-types';

import {
  CurrentUser,
  JwtAuthGuard,
  RolesGuard,
  Roles,
  UserPayload,
} from '@my-product-app/backend-shared';

import {
  CreateWorkOrderRequest,
  WorkOrderResponse,
  GetWorkOrdersRequest,
  GetWorkOrdersResponse,
  UpdateWorkOrderRequest,
  ApproveWorkOrderRequest,
  ApproveWorkOrderResponse,
} from '@my-product-app/backend-proto/generated';

import { BaseGrpcResolver } from '../../resolvers/base.resolver';
import {
  mapGraphQLWorkOrderStatusToProto,
  mapProtoWorkOrderToGraphQL,
} from '@my-product-app/backend-shared-mappers';
import { dateToTimestamp } from '@my-product-app/backend-shared';

@UseGuards(JwtAuthGuard, RolesGuard)
@Resolver(() => WorkOrder)
export class WorkorderResolver extends BaseGrpcResolver(
  WorkOrderGrpcClientService
) {
  constructor(protected readonly grpcService: WorkOrderGrpcClientService) {
    super(grpcService);
  }

  /**  Create a work order */
  @Mutation(() => WorkOrder)
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async createWorkOrder(
    @Args('input') input: CreateWorkorderInput,
    @CurrentUser() user: UserPayload
  ): Promise<WorkOrder> {
    const request: CreateWorkOrderRequest = {
      workOrderCode: '', // generate code if needed
      status: mapGraphQLWorkOrderStatusToProto(WorkOrderStatus.REQUESTED),
      createdById: user.id,
      productId: input.productId,
      clientLocation: input.clientLocation,
      vendorOrClient: input.vendorOrClient,
      quantity: input.quantity,
      deliveryDate: dateToTimestamp(input.deliveryDate),
      description: input.description ?? '',
    };

    const response: WorkOrderResponse = await this.handleGrpcCall(
      this.grpcService.createWorkOrder(request)
    );

    if (!response.workOrder) {
      throw new Error('Work order not found in response');
    }

    return mapProtoWorkOrderToGraphQL(response.workOrder);
  }

  /** List work orders with filters & pagination */
  @Query(() => WorkordersResponse, { name: 'workorders' })
  async getWorkOrders(
    @Args('workOrderCode', { type: () => String, nullable: true })
    workOrderCode?: string,
    @Args('clientLocation', { type: () => String, nullable: true })
    clientLocation?: string,
    @Args('vendorOrClient', { type: () => String, nullable: true })
    vendorOrClient?: string,
    @Args('status', { type: () => String, nullable: true })
    status?: WorkOrderStatus,
    @Args('page', { type: () => Int, nullable: true, defaultValue: 1 })
    page?: number,
    @Args('pageSize', { type: () => Int, nullable: true, defaultValue: 10 })
    pageSize?: number
  ): Promise<WorkordersResponse> {
    // construct filters using plain values (no wrappers)
    const filters: GetWorkOrdersRequest = {
      workOrderCode: workOrderCode || undefined,
      clientLocation: clientLocation || undefined,
      vendorOrClient: vendorOrClient || undefined,
      status: mapGraphQLWorkOrderStatusToProto(
        status ?? WorkOrderStatus.REQUESTED
      ),
      page: page ?? 1,
      pageSize: pageSize ?? 10,
    };

    const response: GetWorkOrdersResponse = await this.handleGrpcCall(
      this.grpcService.getWorkOrders(filters)
    );

    return {
      workorders: response.workOrders?.map(mapProtoWorkOrderToGraphQL) ?? [],
      total: response.totalCount ?? 0,
    };
  }

  /**  Get single work order by ID */
  @Query(() => WorkOrder, { name: 'workorder' })
  async findOne(
    @Args('id', { type: () => Int }) id: number
  ): Promise<WorkOrder> {
    const response: WorkOrderResponse = await this.handleGrpcCall(
      this.grpcService.getWorkOrderById(id)
    );
    if (!response.workOrder) {
      throw new Error('Work order not found in response');
    }

    return mapProtoWorkOrderToGraphQL(response.workOrder);
  }

  /**  Update work order */
  @Mutation(() => WorkOrder)
  async updateWorkorder(
    @Args('input') input: UpdateWorkorderInput,
    @CurrentUser() user: UserPayload
  ): Promise<WorkOrder> {
    const request: UpdateWorkOrderRequest = {
      workOrderId: input.id,
      productId: input.productId ?? 0,
      clientLocation: input.clientLocation ?? '',
      vendorOrClient: input.vendorOrClient ?? '',
      quantity: input.quantity ?? 0,
      deliveryDate: input.deliveryDate
        ? dateToTimestamp(input.deliveryDate)
        : undefined,
      description: input.description ?? '',
      status: input.status ? mapGraphQLWorkOrderStatusToProto(input.status) : 0,
      createdById: user.id,
      approvedById: user.id,
      companyId: user.companyId ?? 0,
      //priority: input.priority ?? 0,  pending task now i will handle it later
      priority: 0,
      assignedTo: input.assignedTo ?? '',
      attachments: input.attachments ?? [],
      comments: input.comments ?? '',
    };

    const response: WorkOrderResponse = await this.handleGrpcCall(
      this.grpcService.updateWorkOrder(request)
    );

    if (!response.workOrder) {
      throw new Error('Work order not found in response');
    }

    return mapProtoWorkOrderToGraphQL(response.workOrder);
  }

  /**  Approve work order */
  @Mutation(() => WorkOrder)
  async approveWorkorder(
    @Args('input') input: ApproveWorkorderInput,
    @CurrentUser() user: UserPayload
  ): Promise<WorkOrder> {
    const request: ApproveWorkOrderRequest = {
      approvedById: user.id, // mandatory approver
      workOrderId: input.id,
      //priority: input.priority ?? 0,  pending task now i will handle it later
      priority: 0,
      attachments: input.attachments ?? [],
      assignedTo: input.assignedTo ?? '',
      comments: input.comments ?? '',
      status: mapGraphQLWorkOrderStatusToProto(input.status),
    };

    const response: ApproveWorkOrderResponse = await this.handleGrpcCall(
      this.grpcService.approveWorkOrder(request)
    );

    if (!response.workOrder) {
      throw new Error('Work order not found in response');
    }

    return mapProtoWorkOrderToGraphQL(response.workOrder);
  }
}
