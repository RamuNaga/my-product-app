import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestApplication } from '@nestjs/common';
import { AppLoggerService, LoggingInterceptor } from '@my-product-app/logger';

interface BootstrapOptions {
  hostEnv: string;
  portEnv: string;
  fallbackPort: number;
  serviceName: string;
}

async function tryGetLogger(
  app: INestApplication
): Promise<AppLoggerService | undefined> {
  try {
    return app.get(AppLoggerService);
  } catch (err) {
    console.warn('AppLoggerService not available:', err);
    return undefined;
  }
}

export async function bootstrapMicroservice(
  AppModule: any,
  options: BootstrapOptions
): Promise<INestApplication> {
  try {
    //const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // 👇 ✅ Serve static assets from uploads folder
    app.useStaticAssets(join(__dirname, '..', '..', '..', '..', 'uploads'), {
      prefix: '/uploads',
    });
    // Enable CORS here
    app.enableCors({
      origin: 'http://localhost:4200', // adjust as needed for your frontend URL
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true, // if you want to allow cookies/auth headers
    });

    const logger = await tryGetLogger(app);
    if (logger) {
      app.useLogger(logger);
      app.useGlobalInterceptors(new LoggingInterceptor(logger));
    }

    const host = process.env[options.hostEnv] || 'localhost';
    const port = Number(process.env[options.portEnv]) || options.fallbackPort;

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
    throw error;
  }
}
