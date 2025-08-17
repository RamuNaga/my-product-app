import { Module } from '@nestjs/common';
import { PrismaModule } from '@my-product-app/prisma';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';

@Module({
  imports: [PrismaModule, LoggerModule, SharedJwtModule, PingModule],
  providers: [],
  exports: [PrismaModule, LoggerModule, SharedJwtModule, PingModule],
})
export class SharedModule {}
