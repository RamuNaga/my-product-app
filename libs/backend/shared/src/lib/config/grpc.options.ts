import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const USER_SERVICE = 'USER_SERVICE';
export const PRODUCT_SERVICE = 'PRODUCT_SERVICE';
export const WORKORDER_SERVICE = 'WORKORDER_SERVICE';
export const COMPANY_SERVICE = 'COMPANY_SERVICE';
export const COMPANY_LOCATION_SERVICE = 'COMPANY_LOCATION_SERVICE';

const MICRO_HOST = process.env['MICROSERVICE_HOST'] || '127.0.0.1';

export const getUserServiceOptions = (): ClientProviderOptions => ({
  name: USER_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: join(__dirname, '../proto/user.proto'),
    url: `${MICRO_HOST}:${process.env['USER_SERVICE_MS_PORT'] || 4003}`,
  },
});

export const getProductServiceOptions = (): ClientProviderOptions => ({
  name: PRODUCT_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'product',
    protoPath: join(__dirname, '../proto/product.proto'),
    url: `${MICRO_HOST}:${process.env['PRODUCT_SERVICE_MS_PORT'] || 4001}`,
  },
});

export const getWorkorderServiceOptions = (): ClientProviderOptions => ({
  name: WORKORDER_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'workorder',
    protoPath: join(__dirname, '../proto/workorder.proto'),
    url: `${MICRO_HOST}:${process.env['WORKORDER_SERVICE_MS_PORT'] || 4005}`,
  },
});

export const getCompanyServiceOptions = (): ClientProviderOptions => ({
  name: COMPANY_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'company',
    protoPath: join(__dirname, '../proto/company.proto'),
    url: `${MICRO_HOST}:${process.env['COMPANY_SERVICE_MS_PORT'] || 4007}`,
  },
});

export const getCompanyLocationServiceOptions = (): ClientProviderOptions => ({
  name: COMPANY_LOCATION_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'companylocation',
    protoPath: join(__dirname, '../proto/company-location.proto'),
    url: `${MICRO_HOST}:${
      process.env['COMPANY_LOCATION_SERVICE_MS_PORT'] || 4009
    }`,
  },
});
