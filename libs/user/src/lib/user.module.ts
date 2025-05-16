import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { SharedModule } from '@my-product-app/shared';
import { PrismaService } from '@my-product-app/prisma';

@Module({
  imports: [SharedModule], // 👈 Important
  providers: [
    UserService,
    UserResolver,
    {
      provide: PrismaService,
      useValue: {}, // stub or mock
    },
  ],
  exports: [UserService],
})
export class UserModule {}
