import { Module } from '@nestjs/common';

import { RegistrationService } from './service/registration.service';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [SharedModule],
  providers: [RegistrationService],
  exports: [RegistrationService],
})
export class RegistrationModule {}
