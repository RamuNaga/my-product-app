import { Controller, Get, Module } from '@nestjs/common';

@Controller('ping')
export class PingController {
  @Get()
  ping() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}

@Module({
  controllers: [PingController],
})
export class PingModule {}
