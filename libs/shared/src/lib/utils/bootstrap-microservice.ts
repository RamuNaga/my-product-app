import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestApplication } from '@nestjs/common';
import { AppLogger, LoggingInterceptor } from '@my-product-app/logger';

interface BootstrapOptions {
  hostEnv: string;
  portEnv: string;
  fallbackPort: number;
  serviceName: string;
}

export async function bootstrapMicroservice(
  AppModule: any,
  options: BootstrapOptions
): Promise<INestApplication> {
  try {
    const app = await NestFactory.create(AppModule);
    // Inject AppLogger
    const logger = app.get(AppLogger);
    app.useLogger(logger);
    app.useGlobalInterceptors(new LoggingInterceptor(logger));

    const host = process.env[options.hostEnv] || 'localhost';
    const port = Number(process.env[options.portEnv]) || options.fallbackPort;

    // Log the resolved host and port for easier debugging
    console.log(`Starting ${options.serviceName} on ${host}:${port}`);

    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.TCP,
      options: { host, port },
    });

    await app.startAllMicroservices();
    await app.listen(port);

    console.log(`${options.serviceName} is running on http://${host}:${port}`);

    return app;
  } catch (error) {
    console.error(`Error during ${options.serviceName} bootstrap:`, error);
    throw error; // Rethrow or handle as needed
  }
}
