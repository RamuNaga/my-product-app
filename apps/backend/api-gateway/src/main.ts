import { ClientProxy } from '@nestjs/microservices';
import { ApiGatewayModule } from './app/api-gateway.module';
import {
  bootstrapMicroservice,
  PRODUCT_SERVICE,
  USER_SERVICE,
  WORKORDER_SERVICE,
} from '@my-product-app/backend-shared';

async function startApiGateway() {
  console.log('Starting API Gateway...');

  // Start API Gateway as a microservice-enabled application
  const app = await bootstrapMicroservice(ApiGatewayModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'API_GATEWAY_PORT',
    fallbackPort: 3000,
    serviceName: 'API Gateway',
  });

  // Get Clients for Product, User, and WorkOrder Services
  const productClient = app.get<ClientProxy>(PRODUCT_SERVICE);
  const userClient = app.get<ClientProxy>(USER_SERVICE);
  const workorderClient = app.get<ClientProxy>(WORKORDER_SERVICE);

  // Ping all services to check connectivity
  pingService(productClient, 'Product Service');
  pingService(userClient, 'User Service');
  pingService(workorderClient, 'WorkOrder Service');
}

function pingService(client: ClientProxy, serviceName: string) {
  client.send({ cmd: 'ping' }, {}).subscribe({
    next: (res) => console.log(`✅ Ping response from ${serviceName}:`, res),
    error: (err) => console.error(`❌ Ping error from ${serviceName}:`, err),
  });
}

startApiGateway();
