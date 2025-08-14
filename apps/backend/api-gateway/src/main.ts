import { ClientProxy } from '@nestjs/microservices';
import { ApiGatewayModule } from './app/api-gateway.module';
import {
  bootstrapMicroservice,
  PRODUCT_SERVICE,
} from '@my-product-app/backend-shared';

async function startApiGateway() {
  console.log('start  ApiGateway calling');

  const app = await bootstrapMicroservice(ApiGatewayModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'API_GATEWAY_PORT',
    fallbackPort: 3000,
    serviceName: 'API Gateway',
  });
  const productClient = app.get<ClientProxy>(PRODUCT_SERVICE);
  productClient.send({ cmd: 'ping' }, {}).subscribe({
    next: (res) => console.log('✅ Ping response from Product Service:', res),
    error: (err) => console.error('❌ Ping error from Product Service:', err),
  });
}

startApiGateway();
