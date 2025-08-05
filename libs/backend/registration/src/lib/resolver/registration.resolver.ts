import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { RegistrationService } from '../service/registration.service';
import { RegisterCompanyUserInput } from '../dto/register-company-user.input';

@Resolver()
export class RegistrationResolver {
  constructor(private readonly registrationService: RegistrationService) {}

  @Mutation(() => Boolean)
  async registerCompanyUser(
    @Args('registerCompanyUserInput')
    input: RegisterCompanyUserInput
  ): Promise<boolean> {
    return this.registrationService.registerCompanyUser(input);
  }
}
