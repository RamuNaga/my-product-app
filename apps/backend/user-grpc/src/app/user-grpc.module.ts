import { Module } from '@nestjs/common';
import { UserGrpcController } from './user-grpc.controller';
import { UserGrpcService } from './user-grpc.service';
import { SharedModule } from '@my-product-app/backend-shared';
import { UserPrismaModule } from '@my-product-app/backend-prisma/user-prisma';

@Module({
  imports: [
    UserPrismaModule, // Provides UserPrismaService
    SharedModule, // Provides JwtService globally via SharedJwtModule
  ],
  controllers: [UserGrpcController],
  providers: [UserGrpcService],
})
export class UserGrpcModule {}
