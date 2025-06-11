import { Module } from '@nestjs/common';
import { PrismaModule } from '@my-product-app/prisma';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';

@Module({
  imports: [PrismaModule, LoggerModule, SharedJwtModule],
  providers: [],
  exports: [PrismaModule, LoggerModule, SharedJwtModule],
})
export class SharedModule {}
