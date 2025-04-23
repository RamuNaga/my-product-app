/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: process.env.MICROSERVICE_HOST,
      port: Number(process.env.USER_SERVICE_PORT) || 8877,
    },
  });
  await app.startAllMicroservices(); // important!
  await app.listen(process.env.USER_SERVICE_PORT || 8877);
  console.log(
    `🚀 Gateway is running on http://localhost:${
      process.env.USER_SERVICE_PORT || 8877
    }`
  );
}

bootstrap();
