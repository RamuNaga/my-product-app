import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(
    //     process.cwd(),
    //     'apps/backend/api-gateway/src/schema.gql'
    //   ),
    //   //playground: true, // optional in dev
    // }),

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        path.resolve(__dirname, '../../../../../.env'), // root .env
      ],
    }),

    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.MICROSERVICE_HOST || '127.0.0.1',
          port: Number(process.env.USER_SERVICE_PORT) || 8877,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
