import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { INestApplication,  Type } from '@nestjs/common'; // INestMicroservice,
import { AppLoggerService, LoggingInterceptor } from '@my-product-app/logger';
import * as bodyParser from 'body-parser';


interface GrpcOptions {
  package: string;
  protoPath: string;
  url?: string;
}

interface BootstrapOptions {
  hostEnv: string;
  portEnv: string;
  fallbackPort: number;
  serviceName: string;
  grpc?: GrpcOptions;
}

function tryGetLogger(
  app: INestApplication
): AppLoggerService | undefined {
  try {
    return app.get(AppLoggerService);
  } catch (error) {
    console.warn(
      'AppLoggerService not available:',
      error
    );

    return undefined;
  }
}



export async function bootstrapMicroservice(
  AppModule: Type<unknown>,
  options: BootstrapOptions
): Promise<INestApplication> {
  try {
    const app =
      await NestFactory.create<NestExpressApplication>(
        AppModule
      );

    /*
     * Configure the HTTP portion of the application.
     */
    app.use(
      bodyParser.json({
        limit: '10mb',
      })
    );

    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '10mb',
      })
    );

    app.useStaticAssets(
      join(process.cwd(), 'uploads'),
      {
        prefix: '/uploads',
      }
    );

    app.enableCors({
      origin:
        process.env['FRONTEND_URL'] ||
        'http://localhost:4200',

      methods:
        'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',

      credentials: true,
    });

    /*
     * Configure the application logger and HTTP interceptor
     * before connecting the microservice.
     */
    const logger = tryGetLogger(app);

    if (logger) {
      app.useLogger(logger);

      app.useGlobalInterceptors(
        new LoggingInterceptor(logger)
      );
    }


    /*
     * Determine the HTTP host and port.
     */
    const host =
      process.env[options.hostEnv] ||
      (process.env['RUN_ENV'] === 'docker'
        ? '0.0.0.0'
        : '127.0.0.1');

    const port =
      Number(process.env[options.portEnv]) ||
      options.fallbackPort;

    /*
     * Example:
     *
     * serviceName = "Company Service"
     * environment key = COMPANY_SERVICE_MS_PORT
     */
    const microserviceEnvKey =
      `${options.serviceName
        .toUpperCase()
        .replace(/\s+/g, '_')}_MS_PORT`;

    const microservicePort =
      Number(process.env[microserviceEnvKey]) ||
      port + 1;

    console.log(
      `Starting ${options.serviceName} on ${host}:${port}`
    );

    console.log(
      `microserviceEnvKey: ${microserviceEnvKey}, ` +
        `microservicePort: ${microservicePort}`
    );

    //let microservice: INestMicroservice;

    /*
     * Connect either a gRPC or TCP microservice.
     *
     * inheritAppConfig makes the microservice inherit global
     * guards and interceptors registered on the HTTP app.
     */
    if (options.grpc) {
      const grpcUrl =
        options.grpc.url ||
        `${host}:${microservicePort}`;

      
        app.connectMicroservice<MicroserviceOptions>(
          {
            transport: Transport.GRPC,
            options: {
              package: options.grpc.package,
              protoPath: options.grpc.protoPath,
              url: grpcUrl,
            },
          },
          {
            inheritAppConfig: true,
          }
        );

      console.log(
        `${options.serviceName} gRPC microservice ` +
          `configured on ${grpcUrl}`
      );
    } else {
      
        app.connectMicroservice<MicroserviceOptions>(
          {
            transport: Transport.TCP,
            options: {
              host,
              port: microservicePort,
            },
          },
          {
            inheritAppConfig: true,
          }
        );

      console.log(
        `${options.serviceName} TCP microservice ` +
          `configured on ${host}:${microservicePort}`
      );
    }

    /*
     * Do not call the following here:
     *
     * microservice.useGlobalFilters(...)
     * microservice.useGlobalGuards(...)
     * microservice.useGlobalInterceptors(...)
     *
     * The guard and interceptor are inherited from app.
     * The gRPC filter is applied to RPC controllers.
     */
    await app.startAllMicroservices();

    /*
     * NestFactory.create() applications are normally initialized
     * automatically by listen(), so calling app.init() separately
     * is unnecessary.
     */
    await app.listen(port, host);

    console.log(
      `${options.serviceName} microservice successfully started`
    );

    console.log(
      `${options.serviceName} is running on ` +
        `http://${host}:${port}`
    );

    console.log(
      `${options.serviceName} /ping endpoint is available at ` +
        `http://${host}:${port}/ping`
    );

    return app;
  } catch (error) {
    console.error(
      `Error during ${options.serviceName} bootstrap:`,
      error
    );

    throw error;
  }
}