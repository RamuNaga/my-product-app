import { ApiGatewayModule } from './app/api-gateway.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

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
  // Start HTTP server explicitly (GraphQL / REST)
  // ---------------------------
  const port = Number(process.env['API_GATEWAY_PORT']) || 3000;
  await app.listen(port);
  console.log(` API Gateway is running at http://localhost:${port}/graphql`);
}

startApiGateway();
