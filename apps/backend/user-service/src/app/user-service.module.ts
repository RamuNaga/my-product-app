import { Module } from '@nestjs/common';
import { RegistrationModule } from '@my-product-app/backend-registration';

@Module({
  imports: [RegistrationModule],
  controllers: [],
})
export class UserServiceModule {}
