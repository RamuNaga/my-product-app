import { UserServiceModule } from './app/user-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startUserService() {
  console.log('startUserService calling');
  await bootstrapMicroservice(UserServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'USER_SERVICE_MS_PORT', //  Use MS port
    fallbackPort: 4003, //  Matches MS port
    serviceName: 'User Service',
  });
}

startUserService();
