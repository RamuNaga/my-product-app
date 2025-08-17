import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestApplication } from '@nestjs/common';
import { AppLoggerService, LoggingInterceptor } from '@my-product-app/logger';
import * as bodyParser from 'body-parser';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

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
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // Body parser config (good for large payloads)
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

    // Serve static assets
    app.useStaticAssets(join(process.cwd(), 'uploads'), { prefix: '/uploads' });

    // Enable CORS
    app.enableCors({
      origin: process.env['FRONTEND_URL'] || 'http://localhost:4200',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });

    // Logger setup
    const logger = await tryGetLogger(app);
    if (logger) {
      app.useLogger(logger);
      app.useGlobalInterceptors(new LoggingInterceptor(logger));
    }

    const host = process.env[options.hostEnv] || 'localhost';
    const port = Number(process.env[options.portEnv]) || options.fallbackPort;

    const microserviceEnvKey = `${options.serviceName
      .toUpperCase()
      .replace(/\s/g, '_')}_MS_PORT`;
    const microservicePort =
      Number(process.env[microserviceEnvKey]) || port + 1000;

    console.log(`Starting ${options.serviceName} on ${host}:${port}`);

    // Connect Microservice
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.TCP,
      options: { host, port: microservicePort },
    });

    await app.startAllMicroservices();

    // Initialize DI
    await app.init();

    const jwtAuthGuard = app.get(JwtAuthGuard);
    app.useGlobalGuards(jwtAuthGuard);

    await app.listen(port);
    console.log(`${options.serviceName} is running on http://${host}:${port}`);
    console.log(
      `${options.serviceName} TCP microservice running on ${host}:${microservicePort}`
    );
    console.log(
      `${options.serviceName} /ping endpoint is available at http://${host}:${port}/ping`
    );

    return app;
  } catch (error) {
    console.error(`Error during ${options.serviceName} bootstrap:`, error);
    throw error;
  }
}
