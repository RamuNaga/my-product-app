import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { CreateUserInput } from '../dto/create-user.input';

import { LoginResponse } from '../dto/login-response.model';
import { LoginInput } from '../dto/login.input';
import { IUser } from '../interfaces/user.interface';
import { User } from '../graphql/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // Use User in the decorator, but can keep IUser in TS signature
  @Query(() => [User])
  async getAllUsers(): Promise<IUser[]> {
    return this.userService.findAll();
  }

  @Query(() => Boolean)
  async isEmailAvailable(@Args('email') email: string): Promise<boolean> {
    return this.userService.isEmailAvailable(email);
  }

  // Return User (GraphQL type)
  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<IUser> {
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
