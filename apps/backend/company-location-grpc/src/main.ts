import { bootstrapMicroservice } from '@my-product-app/backend-shared';
import { protoPaths, protoPackages } from '@my-product-app/backend-proto';
import { CompanyLocationGrpcModule } from './app/company-location.module';

async function startCompanyLocationService() {
  console.log('Starting company Service (gRPC)');
  await bootstrapMicroservice(CompanyLocationGrpcModule, {
    hostEnv: 'MICROSERVICE_HOST',
    portEnv: 'COMPANY_LOCATION_SERVICE_PORT',
    fallbackPort: 4005,
    serviceName: 'Company Location Service',
    grpc: {
      package: protoPackages.companyLocation,
      protoPath: protoPaths.companyLocation,
    },
  });
}

startCompanyLocationService();
