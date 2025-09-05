import { Global, Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Reflector } from '@nestjs/core';

@Global()
@Module({
  imports: [
    ConfigModule,
    NestJwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        if (!secret) {
          throw new Error('JWT_SECRET not set in environment variables');
        }

        return {
          secret,
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRATION') || '3600s',
          },
        };
      },
    }),
  ],
  providers: [JwtStrategy, JwtAuthGuard, Reflector],
  exports: [NestJwtModule, JwtStrategy, JwtAuthGuard],
})
export class SharedJwtModule {}
