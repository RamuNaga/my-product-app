import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input'; // <-- add if you have update
import { LoginResponse } from '../dto/login-response.model';
import { LoginInput } from '../dto/login.input';
import { User } from '../graphql/user.model';

import { createBaseResolver } from '@my-product-app/backend-shared';
import { UserPrismaService } from '@my-product-app/backend-prisma/user-prisma';
import { UserWithoutPassword } from '../interfaces/user.interface';

// 🔹 Create the BaseUserResolver using the generic factory
const BaseUserResolver = createBaseResolver<
  User, // GraphQL return type
  CreateUserInput, // DTO for create
  UpdateUserInput, // DTO for update
  UserPrismaService // Prisma service
>(
  'User',
  User,
  CreateUserInput,
  UpdateUserInput,
  (prisma) => prisma.user // map to Prisma user model
);

@Resolver(() => User)
export class UserResolver extends BaseUserResolver {
  constructor(
    private readonly userService: UserService,
    prisma: UserPrismaService
  ) {
    super(prisma); // pass PrismaService up to BaseResolver
  }

  // Custom queries/mutations remain here

  @Query(() => Boolean)
  async isEmailAvailable(@Args('email') email: string): Promise<boolean> {
    return this.userService.isEmailAvailable(email);
  }

  // Return User (GraphQL type)
  @Mutation(() => User, { name: `createUser` })
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<UserWithoutPassword> {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<LoginResponse> {
    const { email, password } = loginInput;
    return this.userService.login(email, password);
  }
}
