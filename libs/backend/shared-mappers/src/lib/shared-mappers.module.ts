import { Module } from '@nestjs/common';
import { MapperModule } from './mapper/mapper.module';

@Module({
  imports: [MapperModule],

  exports: [MapperModule],
})
export class SharedMappersModule {}
