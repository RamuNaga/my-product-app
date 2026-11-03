import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {
  CorrelationMiddleware,
  DEFAULT_THROTTLE_LIMIT,
  DEFAULT_THROTTLE_TTL,
  SharedModule,
} from '@my-product-app/backend-shared';
import { RegistrationModule } from '@my-product-app/backend-registration'; // business logic
import { GraphQLConfigModule } from './config/graphql.module';
import { PingResolver } from './resolvers/ping.resolver';
import { CompanyLocationGrpcClientModule } from '@my-product-app/company-location-grpc-client';
import { CompanyGrpcClientModule } from '@my-product-app/company-grpc-client';
import { UserGrpcClientModule } from '@my-product-app/user-grpc-client';
import { ProductGrpcClientModule } from '@my-product-app/product';
import { WorkOrderGrpcClientModule } from '@my-product-app/workorder';
import { CompanyLocationResolver } from './company-location/resolver/company-location.resolver';
import { UserResolver } from './user/resolver/user.resolver';
import { CompanyResolver } from './company/resolver/company.resolver';
import { ProductResolver } from './product/resolver/product.resolver';
import { WorkorderResolver } from './workorder/resolver/workorder.resolver';
import { RegistrationResolver } from './registration/resolver/registration.resolver';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { GraphqlThrottlerGuard } from './guards/graphql-throttler.guard';

@Module({
  imports: [
    SharedModule,
    GraphQLConfigModule,
    RegistrationModule,
    ProductGrpcClientModule,
    UserGrpcClientModule,
    CompanyGrpcClientModule,
    WorkOrderGrpcClientModule,
    CompanyLocationGrpcClientModule,
    ThrottlerModule.forRoot([
      {
        ttl: DEFAULT_THROTTLE_TTL,
        limit: DEFAULT_THROTTLE_LIMIT,
      },
    ]),
  ],
  controllers: [],
  providers: [
    PingResolver,
    CompanyLocationResolver,
    UserResolver,
    CompanyResolver,
    ProductResolver,
    WorkorderResolver,
    RegistrationResolver,
    {
      provide: APP_GUARD,
      useClass: GraphqlThrottlerGuard,
    },
  ],
})
export class BffModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CorrelationMiddleware).forRoutes('*');
  }
}
