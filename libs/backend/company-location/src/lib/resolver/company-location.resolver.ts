import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CompanyLocation } from '../graphql/company-location.model';
import { CreateLocationInput } from '../dto/create-location.input';
import { CompanyLocationService } from '../service/company-location.service';

@Resolver('CompanyLocation')
export class CompanyLocationResolver {
  constructor(
    private readonly companyLocationService: CompanyLocationService
  ) {}

  @Mutation(() => CompanyLocation)
  createCompanyLocation(
    @Args('createLocationInput') createLocationInput: CreateLocationInput
  ) {
    return this.companyLocationService.create(createLocationInput);
  }
}
