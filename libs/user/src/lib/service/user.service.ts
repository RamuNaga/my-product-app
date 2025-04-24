import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/generated/prisma';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../graphql/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async createUser(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
