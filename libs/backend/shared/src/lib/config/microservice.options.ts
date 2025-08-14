import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const USER_SERVICE = 'USER_SERVICE';

export const getUserServiceOptions = (): ClientProviderOptions => ({
  name: USER_SERVICE,
  transport: Transport.TCP,
  options: {
    host: process.env['MICROSERVICE_HOST'] || '127.0.0.1',
    port: Number(process.env['USER_SERVICE_MS_PORT']) || 3003,
  },
});

// Optionally, export more microservice configs:
export const PRODUCT_SERVICE = 'PRODUCT_SERVICE';

export const getProductServiceOptions = (): ClientProviderOptions => ({
  name: PRODUCT_SERVICE,
  transport: Transport.TCP,
  options: {
    host: process.env['MICROSERVICE_HOST'] || '127.0.0.1',
    port: Number(process.env['PRODUCT_SERVICE_MS_PORT']) || 4001,
  },
});
