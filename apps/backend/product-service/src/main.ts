import { ProductServiceModule } from './app/product-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend-proto';

async function startProductService() {
  console.log('Starting Product Service (gRPC)');
  await bootstrapMicroservice(ProductServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'PRODUCT_SERVICE_MS_PORT',
    fallbackPort: 4001,
    serviceName: 'Product Service',
    grpc: {
      package: protoPackages.product,
      protoPath: protoPaths.product,
    },
  });
}

startProductService();
