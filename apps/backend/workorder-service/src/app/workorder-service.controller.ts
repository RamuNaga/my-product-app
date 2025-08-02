import { Controller } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
// import { WorkOrderService } from '@my-product-app/workorder';

@Controller()
export class WorkOrderServiceController {
  //constructor(private readonly workOrderService: WorkOrderService) {}
  // // Stage 1: Create Work Order
  // @MessagePattern({ cmd: 'create_workorder' })
  // async create(@Payload() data: any) {
  //   try {
  //     const payload = {
  //       ...data,
  //       status: 'Requested',
  //     };
  //     const workOrder = await this.workOrderService.create(payload);
  //     return { status: 'success', data: workOrder };
  //   } catch (error) {
  //     return handleError(error);
  //   }
  // }
  // // Stage 1: Get All
  // @MessagePattern({ cmd: 'get_all_workorders' })
  // findAll() {
  //   return this.workOrderService.findAll();
  // }
  // // Stage 2: Approve & Assign
  // @MessagePattern({ cmd: 'approve_workorder' })
  // async approve(@Payload() payload: { id: number; data: any }) {
  //   try {
  //     const updatePayload = {
  //       status: 'Approved',
  //       approvedById: payload.data.approvedById,
  //       priority: payload.data.priority,
  //       assignedTo: payload.data.assignedTo,
  //       attachments: payload.data.attachments,
  //       comments: payload.data.comments,
  //     };
  //     const updated = await this.workOrderService.update(
  //       payload.id,
  //       updatePayload
  //     );
  //     return { status: 'success', data: updated };
  //   } catch (error) {
  //     return handleError(error);
  //   }
  // }
  // // Stage 2: Delete or Cancel
  // @MessagePattern({ cmd: 'delete_workorder' })
  // delete(@Payload() id: number) {
  //   return this.workOrderService.delete(id);
  // }
  // // Stage 1 or 2: Fetch by ID
  // @MessagePattern({ cmd: 'get_workorder_by_id' })
  // findOne(@Payload() id: number) {
  //   return this.workOrderService.findById(id);
  // }
}

// function handleError(error: unknown) {
//   const message =
//     error instanceof Error
//       ? error.message
//       : (error as any)?.message ||
//         (error as any)?.response?.message ||
//         'Internal server error';

//   console.error('WorkOrderMessageHandler error:', message);

//   return {
//     status: 'error',
//     message,
//     statusCode: 500,
//   };
// }
