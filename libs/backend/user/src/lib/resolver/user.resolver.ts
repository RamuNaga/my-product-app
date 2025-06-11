import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { CreateUserInput } from '../dto/create-user.input';
//import { User } from '../entities/user.entity';
import { User } from '../graphql/user.model';
import { LoginResponse } from '../dto/login-response.model';
import { LoginInput } from '../dto/login.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => Boolean)
  async isEmailAvailable(@Args('email') email: string): Promise<boolean> {
    return this.userService.isEmailAvailable(email);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }
  @Mutation(() => LoginResponse)
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<LoginResponse> {
    const { email, password } = loginInput;
    return this.userService.login(email, password);
  }
}
