import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from '@my-product-app/product';

@Controller()
export class ProductMessageHandler {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'create_product' })
  async create(@Payload() data: any) {
    const { productCode, name, description, imagePath, productWeight, price } =
      data;

    try {
      const product = await this.productService.create({
        productCode,
        name,
        description,
        image: imagePath ?? null,
        productWeight,
        price,
      });

      return { status: 'success', data: product };
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : (error as any)?.message ||
            (error as any)?.response?.message ||
            'Internal server error';
      console.log('ProductMessageHandler   message', message);
      if (message === 'Product code already exists') {
        return {
          status: 'error',
          message,
          statusCode: 409,
        };
      }

      // Keep this generic fallback
      return {
        status: 'error',
        message: 'Internal server error',
        statusCode: 500,
      };
    }
  }

  @MessagePattern({ cmd: 'get_all_products' })
  findAll() {
    return this.productService.findAll();
  }
}
