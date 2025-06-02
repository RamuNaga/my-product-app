import { AppModule } from './app/app.module';
import { bootstrapMicroservice } from '@my-product-app/backend-shared';

async function startApiGateway() {
  console.log('start  ApiGateway calling');

  await bootstrapMicroservice(AppModule, {
    hostEnv: 'MICROSERVICE_HOST', // Environment variable for host, typically '127.0.0.1'
    portEnv: 'MICROSERVICE_PORT', // Environment variable for microservice port
    fallbackPort: 3000, // Default port for API Gateway if environment variable not set
    serviceName: 'API Gateway', // Name of the service for logging or other purposes
  });
}

startApiGateway();
