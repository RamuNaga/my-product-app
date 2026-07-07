import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: [path.resolve(process.cwd(), '.env')],
      validate: (config) => {
        if (!config['NODE_ENV']) {
          throw new Error('NODE_ENV missing');
        }

        return config;
      },
    }),
  ],
  exports: [ConfigModule],
})
export class SharedConfigModule {}
