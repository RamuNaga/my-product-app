import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserServiceController {
  /**
   * Health Check for User Service
   */
  @MessagePattern({ cmd: 'ping' })
  ping() {
    return { status: 'ok', service: 'User Service', timestamp: new Date() };
  }
}
