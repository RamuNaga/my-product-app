import { Module } from '@nestjs/common';
import { ProductMessageHandler } from './product-message.handler';
import { ProductModule } from '@my-product-app/product';

@Module({
  imports: [ProductModule],
  controllers: [ProductMessageHandler],
})
export class AppModule {}
