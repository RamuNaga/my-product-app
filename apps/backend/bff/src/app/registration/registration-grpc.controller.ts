import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { RegistrationService } from '@my-product-app/backend-registration';
import { RegisterCompanyUserInput } from '@my-product-app/backend-graphql-types';
import { GrpcExceptionFilter } from '@my-product-app/backend-shared';


@UseFilters(GrpcExceptionFilter)
@Controller('auth')
export class RegistrationGrpcController {
  constructor(private readonly registrationGrpcService: RegistrationService) {}

  @Post('register-company-user')
  async registerCompanyUser(@Body() dto: RegisterCompanyUserInput) {
    const success = await this.registrationGrpcService.registerCompanyUser(dto);
    return { success };
  }
}
