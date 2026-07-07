import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';
import { SharedConfigModule } from './config/config.module';

@Module({
  imports: [LoggerModule, SharedJwtModule, PingModule, SharedConfigModule],
  exports: [LoggerModule, SharedJwtModule, PingModule, SharedConfigModule],
})
export class SharedModule {}
