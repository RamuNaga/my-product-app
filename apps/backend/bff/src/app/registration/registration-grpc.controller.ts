import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationService } from '@my-product-app/backend-registration';
import { RegisterCompanyUserInput } from '@my-product-app/backend-registration';

@Controller('auth')
export class RegistrationGrpcController {
  constructor(private readonly registrationGrpcService: RegistrationService) {}

  @Post('register-company-user')
  async registerCompanyUser(@Body() dto: RegisterCompanyUserInput) {
    const success = await this.registrationGrpcService.registerCompanyUser(dto);
    return { success };
  }
}
