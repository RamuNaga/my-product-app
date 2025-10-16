import { ApiGatewayModule } from './app/api-gateway.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startApiGateway() {
  console.log('Starting API Gateway...');

  // Start API Gateway as HTTP + GraphQL server
  await bootstrapMicroservice(ApiGatewayModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'API_GATEWAY_PORT',
    fallbackPort: 3000,
    serviceName: 'API_GATEWAY',
  });
}

startApiGateway();
