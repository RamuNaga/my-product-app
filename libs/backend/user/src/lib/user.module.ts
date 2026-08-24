import { Module } from '@nestjs/common';
//import { UserService } from './service/user.service';
import { UserPrismaModule } from '@my-product-app/user-prisma';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [SharedModule, UserPrismaModule],
  providers: [],
})
export class UserModule {}
