import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { RegistrationService } from '@my-product-app/backend-registration';
import { RegisterCompanyUserInput } from '@my-product-app/backend-graphql-types';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard, Public } from '@my-product-app/backend-shared';
@UseGuards(JwtAuthGuard)
@Resolver()
export class RegistrationResolver {
  constructor(private readonly registrationService: RegistrationService) {}
  @Public()
  @Mutation(() => Boolean)
  async registerCompanyUser(
    @Args('registerCompanyUserInput')
    input: RegisterCompanyUserInput
  ): Promise<boolean> {
    return this.registrationService.registerCompanyUser(input);
  }
}
