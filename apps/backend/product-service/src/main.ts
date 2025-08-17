import { ProductServiceModule } from './app/product-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startProductService() {
  console.log('startProductService calling');
  await bootstrapMicroservice(ProductServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'PRODUCT_SERVICE_MS_PORT', //  Use MS port
    fallbackPort: 4001, //  Matches MS port
    serviceName: 'Product Service',
  });
}

startProductService();
