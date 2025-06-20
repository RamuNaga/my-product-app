import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from '@my-product-app/backend-shared';

@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'USER_SERVICE',
      useValue: {
        getUserData: () => ({ message: 'Hello API' }), // basic stub
      },
    },
  ],
})
export class AppModule {}
