import { UserServiceModule } from './app/user-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend/proto';

async function startUserService() {
  console.log('Starting User Service (gRPC)');
  await bootstrapMicroservice(UserServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'USER_SERVICE_MS_PORT',
    fallbackPort: 4003,
    serviceName: 'User Service',
    grpc: {
      package: protoPackages.user,
      protoPath: protoPaths.user,
    },
  });
}

startUserService();
