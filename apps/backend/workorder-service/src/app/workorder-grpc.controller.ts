import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  ApproveWorkOrderRequest,
  ApproveWorkOrderResponse,
  CreateWorkOrderRequest,
  GetWorkOrdersRequest,
  GetWorkOrdersResponse,
  UpdateWorkOrderRequest,
  WorkOrderResponse,
  Int32Value,
  WORK_ORDER_SERVICE_NAME,
} from '@my-product-app/backend-proto/generated';
import { WorkOrderGrpcService } from './workorder-grpc.service';

@Controller()
export class WorkOrderGrpcController {
  constructor(private readonly workorderService: WorkOrderGrpcService) {}

  @GrpcMethod(WORK_ORDER_SERVICE_NAME, 'CreateWorkOrder')
  async createWorkOrder(
    data: CreateWorkOrderRequest
  ): Promise<WorkOrderResponse> {
    console.log('[WorkorderGrpcController:createWorkOrder] request:', data);
    return this.workorderService.createWorkOrder(data);
  }

  @GrpcMethod(WORK_ORDER_SERVICE_NAME, 'GetWorkOrderById')
  async getWorkOrderById(data: Int32Value): Promise<WorkOrderResponse> {
    return this.workorderService.getWorkOrderById(data.value);
  }

  @GrpcMethod(WORK_ORDER_SERVICE_NAME, 'GetWorkOrders')
  async getWorkOrders(
    data: GetWorkOrdersRequest
  ): Promise<GetWorkOrdersResponse> {
    console.log('[WorkorderGrpcController:getWorkOrders] request:', data);
    return this.workorderService.getWorkOrders(data);
  }

  @GrpcMethod(WORK_ORDER_SERVICE_NAME, 'UpdateWorkOrder')
  async updateWorkOrder(
    data: UpdateWorkOrderRequest
  ): Promise<WorkOrderResponse> {
    return this.workorderService.updateWorkOrder(data);
  }

  @GrpcMethod(WORK_ORDER_SERVICE_NAME, 'ApproveWorkOrder')
  async approveWorkOrder(
    data: ApproveWorkOrderRequest
  ): Promise<ApproveWorkOrderResponse> {
    return this.workorderService.approveWorkOrder(data);
  }
}
