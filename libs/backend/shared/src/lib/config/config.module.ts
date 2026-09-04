import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

const runEnv = process.env['RUN_ENV'] ?? 'local';

if (!['local', 'docker'].includes(runEnv)) {
  throw new Error(
    `Invalid RUN_ENV "${runEnv}". Expected "local" or "docker".`,
  );
}

const envFileName =
  runEnv === 'docker' ? '.env.docker' : '.env.local';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: [path.resolve(process.cwd(), envFileName)],
      validate: (config: Record<string, unknown>) => {
        if (!config['NODE_ENV']) {
          throw new Error('NODE_ENV missing');
        }

        if (!config['DATABASE_URL_USER']) {
          throw new Error('DATABASE_URL_USER missing');
        }

        return config;
      },
    }),
  ],
  exports: [ConfigModule],
})
export class SharedConfigModule {}