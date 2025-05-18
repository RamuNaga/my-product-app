import { Module } from '@nestjs/common';
import { PrismaModule } from '@my-product-app/prisma';
import { LoggerModule } from '@my-product-app/logger';

@Module({
  imports: [PrismaModule, LoggerModule],
  providers: [],
  exports: [PrismaModule, LoggerModule],
})
export class SharedModule {}
