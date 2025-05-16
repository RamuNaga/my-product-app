import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly gateWayService: any
  ) {}

  async getUsers() {
    return this.userServiceClient.send({ cmd: 'get_users' }, {});
  }

  getData() {
    return this.gateWayService.getUserData();
  }
}
