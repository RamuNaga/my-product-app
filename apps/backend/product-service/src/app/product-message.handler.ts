// apps/backend/product-service/src/app/product-message.handler.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from '@my-product-app/product';

@Controller()
export class ProductMessageHandler {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'create_product' })
  create(@Payload() data: any) {
    const { productcode, name, description, imagePath } = data;
    return this.productService.create({
      productcode,
      name,
      description,
      image: imagePath ?? null,
    });
  }

  @MessagePattern({ cmd: 'get_all_products' })
  findAll() {
    return this.productService.findAll();
  }
}
