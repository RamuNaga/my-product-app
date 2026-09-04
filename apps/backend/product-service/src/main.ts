import { ProductServiceModule } from './app/product-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend-proto';

async function startProductService() {
  console.log('Starting Product Service (gRPC)');
  console.log('Using proto file:', protoPaths.product);
  console.log('Using proto package:', protoPackages.product);
  await bootstrapMicroservice(ProductServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'PRODUCT_SERVICE_PORT',
    fallbackPort: 4001,
    serviceName: 'Product Service',
    grpc: {
      package: protoPackages.product,
      protoPath: protoPaths.product,
    },
  });
}

startProductService();
