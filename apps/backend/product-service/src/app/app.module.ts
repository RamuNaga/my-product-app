import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'PRODUCT_SERVICE',
      useValue: {
        getUserData: () => ({ message: 'Hello API' }), // basic stub
      },
    },
  ],
})
export class AppModule {}
