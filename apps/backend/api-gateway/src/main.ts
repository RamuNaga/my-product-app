import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './app/api-gateway.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { ClientGrpc } from '@nestjs/microservices';
import {
  PRODUCT_SERVICE,
  USER_SERVICE,
  WORKORDER_SERVICE,
} from '@my-product-app/backend-shared';

async function startApiGateway() {
  console.log('Starting API Gateway...');

  // Start API Gateway as HTTP + GraphQL server
  const app = await bootstrapMicroservice(ApiGatewayModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'API_GATEWAY_PORT',
    fallbackPort: 3000,
    serviceName: 'API Gateway',
  });

  // ---------------------------
  // Optional: Get gRPC clients
  // ---------------------------
  const productClient = app.get<ClientGrpc>(PRODUCT_SERVICE);
  const userClient = app.get<ClientGrpc>(USER_SERVICE);
  const workorderClient = app.get<ClientGrpc>(WORKORDER_SERVICE);

  // Example: initialize BFF services from clients if needed
  // const productService = productClient.getService<ProductService>('ProductService');
  // const userService = userClient.getService<UserService>('UserService');
  // const workorderService = workorderClient.getService<WorkOrderService>('WorkOrderService');

  // ---------------------------
  // Start HTTP server explicitly (GraphQL / REST)
  // ---------------------------
  const port = Number(process.env['API_GATEWAY_PORT']) || 3000;
  await app.listen(port);
  console.log(` API Gateway is running at http://localhost:${port}/graphql`);
}

startApiGateway();
