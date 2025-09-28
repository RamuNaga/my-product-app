import { WorkOrderServiceModule } from './app/workorder-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend/proto';

async function startWorkOrderService() {
  console.log('Starting WorkOrder Service (gRPC)');
  await bootstrapMicroservice(WorkOrderServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'WORKORDER_SERVICE_MS_PORT',
    fallbackPort: 4005,
    serviceName: 'WorkOrder Service',
    grpc: {
      package: protoPackages.workorder,
      protoPath: protoPaths.workorder,
    },
  });
}

startWorkOrderService();
