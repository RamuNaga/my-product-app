import { UserServiceModule } from './app/user-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startUserService() {
  console.log('startUserService calling');
  await bootstrapMicroservice(UserServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'USER_SERVICE_PORT',
    fallbackPort: 3003, // Matches .env config
    serviceName: 'User Service',
  });
}

startUserService();
