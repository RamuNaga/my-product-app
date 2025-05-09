import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaModule } from '@my-product-app/prisma'; // Use Nx import path alias
import { UserResolver } from './resolver/user.resolver';

@Module({
  imports: [PrismaModule], // 👈 Important
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
