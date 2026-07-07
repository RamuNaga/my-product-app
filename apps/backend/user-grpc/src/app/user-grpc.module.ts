import { Module } from '@nestjs/common';
import { UserGrpcController } from './user-grpc.controller';
import { UserGrpcService } from './user-grpc.service';
import { SharedModule } from '@my-product-app/backend-shared';
import { UserPrismaModule } from '@my-product-app/backend-prisma/user-prisma';
import { UserGrpcClientModule } from '@my-product-app/user-grpc-client';

@Module({
  imports: [
    UserPrismaModule, // Provides UserPrismaService
    SharedModule,
    UserGrpcClientModule, // Provides JwtService globally via SharedJwtModule
  ],
  controllers: [UserGrpcController],
  providers: [UserGrpcService],
})
export class UserGrpcModule {}
