import { AppModule } from './app/app.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startProductService() {
  console.log('startProductService calling');
  await bootstrapMicroservice(AppModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'PRODUCT_SERVICE_PORT',
    fallbackPort: 8888,
    serviceName: 'Product Service',
  });
}

startProductService();
