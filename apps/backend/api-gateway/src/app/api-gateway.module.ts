import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {
  CorrelationMiddleware,
  SharedModule,
  DEFAULT_THROTTLE_LIMIT,
  DEFAULT_THROTTLE_TTL,
} from '@my-product-app/backend-shared';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ProductController } from './controllers/product.controller';
import { PingResolver } from './resolvers/ping.resolver';
import { ProductGrpcClientModule } from '@my-product-app/product';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    SharedModule,
    ProductGrpcClientModule,
    ThrottlerModule.forRoot([
      {
        ttl: DEFAULT_THROTTLE_TTL,
        limit: DEFAULT_THROTTLE_LIMIT,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [
    PingResolver,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class ApiGatewayModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CorrelationMiddleware).forRoutes('*');
  }
}
