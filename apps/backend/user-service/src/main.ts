import { AppModule } from './app/app.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startUserService() {
  console.log('startUserService calling');
  await bootstrapMicroservice(AppModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'USER_SERVICE_PORT',
    fallbackPort: 3003, // Matches .env config
    serviceName: 'User Service',
  });
}

startUserService();
