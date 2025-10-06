import { Module } from '@nestjs/common';

import { RegistrationService } from './service/registration.service';
import { RegistrationResolver } from './resolver/registration.resolver';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [SharedModule],
  providers: [RegistrationService, RegistrationResolver],
  exports: [RegistrationService, RegistrationResolver],
})
export class RegistrationModule {}
