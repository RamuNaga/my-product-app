import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  WorkOrderServiceClient,
  WORK_ORDER_SERVICE_NAME,
  CreateWorkOrderRequest,
  WorkOrderResponse,
  GetWorkOrdersRequest,
  GetWorkOrdersResponse,
  UpdateWorkOrderRequest,
  ApproveWorkOrderRequest,
  ApproveWorkOrderResponse,
} from '@my-product-app/backend-proto/generated';
import { Observable } from 'rxjs';

@Injectable()
export class WorkOrderGrpcClientService implements OnModuleInit {
  private workOrderService!: WorkOrderServiceClient;

  constructor(
    @Inject('WORKORDER_SERVICE') private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.workOrderService = this.client.getService<WorkOrderServiceClient>(
      WORK_ORDER_SERVICE_NAME
    );
  }

  // ----------- CREATE WORK ORDER -----------
  // async createWorkOrder(
  //   request: CreateWorkOrderRequest
  // ): Promise<WorkOrderResponse> {
  //   return await lastValueFrom(this.workOrderService.createWorkOrder(request));
  // }

  createWorkOrder(
    request: CreateWorkOrderRequest
  ): Observable<WorkOrderResponse> {
    return this.workOrderService.createWorkOrder(request); // Observable
  }

  // ----------- GET WORK ORDER BY ID -----------
  getWorkOrderById(id: number): Observable<WorkOrderResponse> {
    return this.workOrderService.getWorkOrderById({ value: id });
  }

  // ----------- LIST WORK ORDERS WITH FILTERS -----------
  getWorkOrders(
    filters: GetWorkOrdersRequest
  ): Observable<GetWorkOrdersResponse> {
    return this.workOrderService.getWorkOrders(filters);
  }

  // ----------- UPDATE WORK ORDER -----------
  updateWorkOrder(
    request: UpdateWorkOrderRequest
  ): Observable<WorkOrderResponse> {
    return this.workOrderService.updateWorkOrder(request);
  }

  // ----------- APPROVE WORK ORDER -----------
  approveWorkOrder(
    request: ApproveWorkOrderRequest
  ): Observable<ApproveWorkOrderResponse> {
    return this.workOrderService.approveWorkOrder(request);
  }
}
