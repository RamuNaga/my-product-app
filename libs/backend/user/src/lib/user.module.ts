import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { SharedModule } from '@my-product-app/backend-shared';
import { PrismaService } from '@my-product-app/prisma';

@Module({
  imports: [SharedModule],
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
