import { Module } from '@nestjs/common';
import { UserModule } from '@my-product-app/user';

@Module({
  imports: [UserModule],
  controllers: [],
})
export class UserServiceModule {}
