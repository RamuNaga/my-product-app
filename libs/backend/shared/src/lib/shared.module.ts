import { Module } from '@nestjs/common';
import { LoggerModule } from '@my-product-app/logger';
import { SharedJwtModule } from './auth/jwt.module';
import { PingModule } from './controllers/ping.controller';
import { MapperModule } from './mapper/mapper.module';

@Module({
  imports: [LoggerModule, MapperModule, SharedJwtModule, PingModule],
  exports: [LoggerModule, SharedJwtModule, PingModule, MapperModule],
})
export class SharedModule {}
