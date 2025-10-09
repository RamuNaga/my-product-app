import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend-proto';
import { CompanyGrpcModule } from './app/company-grpc.module';

async function startCompanyService() {
  console.log('Starting company Service (gRPC)');
  await bootstrapMicroservice(CompanyGrpcModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'COMPANY_SERVICE_MS_PORT',
    fallbackPort: 4004,
    serviceName: 'Company Service',
    grpc: {
      package: protoPackages.company,
      protoPath: protoPaths.company,
    },
  });
}

startCompanyService();
