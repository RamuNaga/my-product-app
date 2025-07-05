import { ProductServiceModule } from './app/product-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startProductService() {
  console.log('startProductService calling');
  await bootstrapMicroservice(ProductServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'PRODUCT_SERVICE_PORT',
    fallbackPort: 8888,
    serviceName: 'Product Service',
  });
}

startProductService();
