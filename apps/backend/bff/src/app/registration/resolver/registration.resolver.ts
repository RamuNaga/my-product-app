import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { RegistrationService } from '@my-product-app/backend-registration';
import { RegisterCompanyUserInput } from '@my-product-app/backend-graphql-types';

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
