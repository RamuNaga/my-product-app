import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserResolver } from './resolver/user.resolver';
import { SharedModule } from '@my-product-app/shared';

@Module({
  imports: [SharedModule], // 👈 Important
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
