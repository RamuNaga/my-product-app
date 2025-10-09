import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { BffModule } from './app/bff.module';

async function startBff() {
  console.log('Bff Service...');

  // Start API Gateway as HTTP + GraphQL server
  await bootstrapMicroservice(BffModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'BFF_PORT',
    fallbackPort: 3002,
    serviceName: 'Bff Service',
  });

  // ---------------------------
  // Start HTTP server explicitly (GraphQL / REST)
  // ---------------------------
  // const port = Number(process.env['BFF_PORT']) || 3002;
  // await app.listen(port);
  // console.log(` BFF is running at http://localhost:${port}/graphql`);
}

startBff();
