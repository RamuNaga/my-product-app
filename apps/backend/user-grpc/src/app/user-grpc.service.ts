import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserByIdRequest,
  GetUserByIdResponse,
  LoginRequest,
  LoginResponse,
  FindAllUsersRequest,
  FindAllUsersResponse,
} from '@my-product-app/backend-proto/generated';

import { UserPrismaService, User } from '@my-product-app/user-prisma';

import {
  mapProtoUserRoleToPrisma,
  mapPrismaUserRoleToProto,
} from './prisma-proto/user-role.mapper';

@Injectable()
export class UserGrpcService {
  constructor(
    private readonly prisma: UserPrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(dto: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, password, username, role, companyId } = dto;

    const existingUser = await this.prisma.client.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new RpcException({
        code: status.ALREADY_EXISTS,
        message: 'Email already in use',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.client.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        role: mapProtoUserRoleToPrisma(role),
        companyId,
      },
    });

    return this.mapPrismaUserToProto(user);
  }

  async login(dto: LoginRequest): Promise<LoginResponse> {
    const user = await this.prisma.client.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Invalid email or password',
      });
    }

    const validPassword = await bcrypt.compare(dto.password, user.password);

    if (!validPassword) {
      throw new RpcException({
        code: status.UNAUTHENTICATED,
        message: 'Invalid email or password',
      });
    }

    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: mapPrismaUserRoleToProto(user.role),
      companyId: user.companyId ?? 0,
      accessToken,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  async getUserById(dto: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.prisma.client.user.findUnique({
      where: {
        id: dto.id,
      },
    });

    if (!user) {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: 'User not found',
      });
    }

    return this.mapPrismaUserToProto(user);
  }

  async findAllUsers(_: FindAllUsersRequest): Promise<FindAllUsersResponse> {
    const users = await this.prisma.client.user.findMany();

    return {
      users: users.map((user) => this.mapPrismaUserToProto(user)),
    };
  }

  private mapPrismaUserToProto(user: User): CreateUserResponse {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: mapPrismaUserRoleToProto(user.role),
      companyId: user.companyId ?? 0,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }
}
