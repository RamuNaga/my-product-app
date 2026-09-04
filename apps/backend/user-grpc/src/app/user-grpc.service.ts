import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
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

import { UserPrismaService, UserRole as PrismaUserRole } from '@my-product-app/user-prisma';
import {
  mapProtoUserRoleToGraphQL,
  mapGraphQLUserRoleToProto,
} from '@my-product-app/backend-shared-mappers';

@Injectable()
export class UserGrpcService {
  constructor(
    private readonly prisma: UserPrismaService,
    private readonly jwtService: JwtService
  ) {}

  // ----------------------------
  // Create user
  // ----------------------------
  async createUser(dto: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, password, username, role, companyId } = dto;

    const emailExists = await this.prisma.client.user.findUnique({
      where: { email },
    });
    if (emailExists) throw new ConflictException('Email already in use');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.client.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        role: mapProtoUserRoleToGraphQL(role) as PrismaUserRole, // ProtoUserRole → PrismaUserRole (direct cast)
        companyId,
      },
    });

    return this.mapToCreateUserResponse(user);
  }

  // ----------------------------
  // Login
  // ----------------------------
  async login(dto: LoginRequest): Promise<LoginResponse> {
    console.log('Before query');

    const count = await this.prisma.client.user.count();

    console.log('Count =', count);

    const user = await this.prisma.client.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid email or password');

    const accessToken = this.jwtService.sign(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
        companyId: user.companyId,
      },
      { expiresIn: '1h' }
    );

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: mapGraphQLUserRoleToProto(
        user.role as unknown as import('@my-product-app/backend-shared-types').UserRole
      ),
      companyId: user.companyId ?? 0,
      accessToken,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }

  // ----------------------------
  // Get user by ID
  // ----------------------------
  async getUserById(dto: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.prisma.client.user.findUnique({
      where: { id: dto.id },
    });
    if (!user) throw new NotFoundException('User not found');

    return this.mapToCreateUserResponse(user);
  }

  // ----------------------------
  // Find all users
  // ----------------------------
  async findAllUsers(_: FindAllUsersRequest): Promise<FindAllUsersResponse> {
    const users = await this.prisma.client.user.findMany();
    return {
      users: users.map((user) => this.mapToCreateUserResponse(user)),
    };
  }

  // ----------------------------
  // Helper to map Prisma user → gRPC CreateUserResponse
  // ----------------------------
  private mapToCreateUserResponse(user: any): CreateUserResponse {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: mapGraphQLUserRoleToProto(
        user.role as unknown as import('@my-product-app/backend-shared-types').UserRole
      ),
      companyId: user.companyId ?? 0,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    };
  }
}
