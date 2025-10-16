import { Module } from '@nestjs/common';
import { SharedModule } from '@my-product-app/backend-shared';
import { ProductController } from './controllers/product.controller';
import { PingResolver } from './resolvers/ping.resolver';
import { ProductGrpcClientModule } from '@my-product-app/product';

@Module({
  imports: [SharedModule, ProductGrpcClientModule],
  controllers: [ProductController],
  providers: [PingResolver],
})
export class ApiGatewayModule {}
