import { Injectable } from '@nestjs/common';

import { CompanyLocation } from '../graphql/company-location.model';
import { CreateLocationInput } from '../dto/create-location.input';

@Injectable()
export class CompanyLocationService {
  // Replace this with your actual DB repository or ORM injection
  private locations: CompanyLocation[] = [];
  private idCounter = 1;

  async create(
    createLocationInput: CreateLocationInput
  ): Promise<CompanyLocation> {
    const newLocation: CompanyLocation = {
      id: this.idCounter++, // auto-increment id simulation
      ...createLocationInput,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.locations.push(newLocation);

    // In real service, persist to DB here
    return newLocation;
  }

  // You can add more methods like findAll, findById, update, delete etc.
}
