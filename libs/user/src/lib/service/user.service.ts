import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/generated/prisma';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async createUser(data: {
    username: string;
    email: string;
    password: string;
    role: string;
  }) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
