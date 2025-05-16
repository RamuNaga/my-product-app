import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productService: any
  ) {}

  getData() {
    return this.productService.getUserData();
  }
}
