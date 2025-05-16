import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('USER_SERVICE') private readonly userService: any) {}

  getData() {
    return this.userService.getUserData();
  }
}
