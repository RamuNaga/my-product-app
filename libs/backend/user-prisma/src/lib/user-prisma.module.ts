import { Module } from '@nestjs/common';
import { UserPrismaService } from './user-prisma.service';
import { userPrismaProvider } from './user-prisma.provider';

@Module({
  providers: [UserPrismaService, userPrismaProvider],
  exports: [UserPrismaService],
})
export class UserPrismaModule {}
