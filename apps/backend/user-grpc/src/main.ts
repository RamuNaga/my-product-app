import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend-proto';
import { UserGrpcModule } from './app/user-grpc.module';

async function startUserService() {
  console.log('Starting User Service (gRPC)');
  await bootstrapMicroservice(UserGrpcModule, {
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
