import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WorkOrderServiceController {
  /**
   * Health Check for WorkOrder Service
   */
  @MessagePattern({ cmd: 'ping' })
  ping() {
    return {
      status: 'ok',
      service: 'WorkOrder Service',
      timestamp: new Date(),
    };
  }
}
