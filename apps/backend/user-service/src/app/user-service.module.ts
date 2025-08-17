import { Module } from '@nestjs/common';
import { RegistrationModule } from '@my-product-app/backend-registration';
import { UserServiceController } from './user-service.controller';

@Module({
  imports: [RegistrationModule],
  controllers: [UserServiceController],
})
export class UserServiceModule {}
