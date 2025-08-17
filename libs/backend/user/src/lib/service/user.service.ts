import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../graphql/user.model';
import { PrismaService } from '@my-product-app/prisma';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserRole as GQLUserRole } from '@my-product-app/backend-shared'; // updated
import { User as PrismaUser, UserRole as PrismaUserRole } from '@prisma/client';
import { UserWithoutPassword } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async create(createUserInput: CreateUserInput): Promise<UserWithoutPassword> {
    const { email, password, username, role, companyId } = createUserInput;

    const emailExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (emailExists) {
      throw new ConflictException('Email is already in use.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data: any = {
      email,
      username,
      password: hashedPassword,
      role: role as PrismaUserRole,
    };

    if (companyId !== undefined) {
      data.companyId = companyId;
    }

    const user = await this.prisma.user.create({
      data,
    });

    return this.mapUser(user);
  }

  async login(
    email: string,
    password: string
  ): Promise<{ user: Omit<User, 'password'>; accessToken: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });

    const { password: _, ...userWithoutPassword } = user;

    return {
      user: this.mapUser(userWithoutPassword as PrismaUser),
      accessToken,
    };
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        companyId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return users.map((user) => this.mapUser(user));
  }

  async isEmailAvailable(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    return !user;
  }

  private mapUser(
    user: Omit<PrismaUser, 'password'> | PrismaUser
  ): UserWithoutPassword {
    return {
      ...user,
      role: user.role as GQLUserRole,
      companyId: user.companyId === null ? undefined : user.companyId,
    };
  }
}
