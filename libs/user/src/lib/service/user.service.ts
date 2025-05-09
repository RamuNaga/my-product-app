import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../graphql/user.model';
import { PrismaService } from '@my-product-app/prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { email } = createUserInput;

    // Check if the email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictException('Email is already in use.');
    }

    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return !user;
  }
}
