import { Module } from '@nestjs/common';
import { PrismaModule } from '@my-product-app/prisma';

@Module({
  imports: [PrismaModule],
  providers: [],
  exports: [],
})
export class SharedModule {}
