import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaModule } from '@my-product-app/prisma'; // Use Nx import path alias
import { PrismaClient } from '../../../prisma/generated/prisma';
import { UserResolver } from './resolver/user.resolver';

@Module({
  imports: [PrismaModule], // 👈 Important
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
    UserService,
    UserResolver,
  ],
  exports: [UserService],
})
export class UserModule {}
