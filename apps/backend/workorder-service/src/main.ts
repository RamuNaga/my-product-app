import { WorkOrderServiceModule } from './app/workorder-service.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startWorkOrderService() {
  console.log('startWorkOrderService calling');
  await bootstrapMicroservice(WorkOrderServiceModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'WORKORDER_SERVICE_MS_PORT', // Use MS port
    fallbackPort: 4005, // Matches MS port
    serviceName: 'WorkOrder Service',
  });
}

startWorkOrderService();
