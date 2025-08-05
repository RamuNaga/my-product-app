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
    // 1. Create company
    const company = await this.companyService.create(dto.company);

    // 2. Create company location
    await this.companyLocationService.create({
      ...dto.location,
      companyId: company.id,
    });

    if (!dto.user.password) {
      throw new Error('Password is required for user registration');
    }

    const userInput: CreateUserInput = {
      email: dto.user.email,
      username: dto.user.username,
      password: dto.user.password,
      role: dto.user.role,
      companyId: company.id,
    };
    // 3. Create user and assign companyId
    const user = await this.userService.create(userInput);
    if (!user) {
      throw new Error('User creation failed');
    }

    // Return combined result or relevant info
    return true;
  }
}
