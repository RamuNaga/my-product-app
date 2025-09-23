import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';

@Module({
  imports: [LoggerModule, SharedJwtModule, PingModule],
  exports: [LoggerModule, SharedJwtModule, PingModule],
})
export class SharedModule {}
