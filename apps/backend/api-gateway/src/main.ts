/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: process.env.MICROSERVICE_HOST,
      port: Number(process.env.MICROSERVICE_PORT),
    },
  });
  await app.startAllMicroservices(); // important!
  await app.listen(process.env.MICROSERVICE_PORT || 3000);
  console.log(
    `🚀 Gateway is running on http://localhost:${process.env.PORT || 3000}`
  );
}

bootstrap();
