import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const USER_SERVICE = 'USER_SERVICE';
export const PRODUCT_SERVICE = 'PRODUCT_SERVICE';
export const WORKORDER_SERVICE = 'WORKORDER_SERVICE';
export const COMPANY_SERVICE = 'COMPANY_SERVICE';
export const COMPANY_LOCATION_SERVICE = 'COMPANY_LOCATION_SERVICE';

/**
 * Detect environment
 */
const isDocker = process.env['RUN_ENV'] === 'docker';
const isProd = process.env['NODE_ENV'] === 'production';

/**
 * Resolve proto path properly for:
 * - Local dev (libs folder)
 * - Docker / production (dist folder)
 */
function protoPath(protoFile: string): string {
  if (isDocker || isProd) {
    return join(__dirname, `../dist/libs/backend/proto/src/lib/${protoFile}`);
  }

  return join(__dirname, `../libs/backend/proto/src/lib/${protoFile}`);
}

/**
 * Resolve correct host depending on environment
 * In Docker → use service names (docker-compose DNS)
 * Local → use 127.0.0.1
 */
function serviceHost(dockerName: string): string {
  return isDocker ? dockerName : '127.0.0.1';
}

/* ======================================================
   USER SERVICE
====================================================== */
export const getUserServiceOptions = (): ClientProviderOptions => ({
  name: USER_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: protoPath('user.proto'),
    url: `${serviceHost('user-grpc')}:${process.env['USER_SERVICE_MS_PORT'] || 4003}`,
  },
});

/* ======================================================
   PRODUCT SERVICE
====================================================== */
export const getProductServiceOptions = (): ClientProviderOptions => ({
  name: PRODUCT_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'product',
    protoPath: protoPath('product.proto'),
    url: `${serviceHost('backend-product-service')}:${process.env['PRODUCT_SERVICE_MS_PORT'] || 4001}`,
  },
});

/* ======================================================
   WORKORDER SERVICE
====================================================== */
export const getWorkorderServiceOptions = (): ClientProviderOptions => ({
  name: WORKORDER_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'workorder',
    protoPath: protoPath('workorder.proto'),
    url: `${serviceHost('workorder-service')}:${process.env['WORKORDER_SERVICE_MS_PORT'] || 4006}`,
  },
});

/* ======================================================
   COMPANY SERVICE
====================================================== */
export const getCompanyServiceOptions = (): ClientProviderOptions => ({
  name: COMPANY_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'company',
    protoPath: protoPath('company.proto'),
    url: `${serviceHost('company-grpc')}:${process.env['COMPANY_SERVICE_MS_PORT'] || 4004}`,
  },
});

/* ======================================================
   COMPANY LOCATION SERVICE
====================================================== */
export const getCompanyLocationServiceOptions = (): ClientProviderOptions => ({
  name: COMPANY_LOCATION_SERVICE,
  transport: Transport.GRPC,
  options: {
    package: 'companylocation',
    protoPath: protoPath('company-location.proto'),
    url: `${serviceHost('company-location-grpc')}:${process.env['COMPANY_LOCATION_SERVICE_MS_PORT'] || 4005}`,
  },
});