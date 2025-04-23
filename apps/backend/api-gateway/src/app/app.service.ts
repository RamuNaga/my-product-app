import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy
  ) {}

  async getUsers() {
    return this.userServiceClient.send({ cmd: 'get_users' }, {});
  }
}
