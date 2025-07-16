import { Module } from '@nestjs/common';
import { PrismaService } from '@my-product-app/prisma';
import { WorkorderService } from './service/workorder.service';
import { WorkorderResolver } from './resolver/workorder.resolver';

@Module({
  providers: [WorkorderService, WorkorderResolver, PrismaService],
})
export class WorkorderModule {}
