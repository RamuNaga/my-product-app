import { Injectable } from '@nestjs/common';
import { RegisterCompanyUserInput } from '../dto/register-company-user.input';
import { CreateUserInput, UserService } from '@my-product-app/user';
import { CompanyService } from '@my-product-app/backend-company';
import { CompanyLocationService } from '@my-product-app/backend-company-location';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly userService: UserService,
    private readonly companyService: CompanyService,
    private readonly companyLocationService: CompanyLocationService
  ) {}

  async registerCompanyUser(dto: RegisterCompanyUserInput) {
    let companyId: number;

    if (dto.existingCompanyId) {
      companyId = dto.existingCompanyId;
    } else {
      if (!dto.company) {
        throw new Error(
          'Company data is required for new company registration'
        );
      }
      if (!dto.location) {
        throw new Error(
          'Location data is required for new company registration'
        );
      }

      const company = await this.companyService.create(dto.company);
      companyId = company.id;

      await this.companyLocationService.create({
        ...dto.location,
        companyId,
      });
    }

    if (!dto.user.password) {
      throw new Error('Password is required for user registration');
    }

    const userInput: CreateUserInput = {
      email: dto.user.email,
      username: dto.user.username,
      password: dto.user.password,
      role: dto.user.role,
      companyId,
    };

    const user = await this.userService.create(userInput);
    if (!user) {
      throw new Error('User creation failed');
    }

    return true;
  }
}
