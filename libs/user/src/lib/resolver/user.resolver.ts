import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/creata-user.input';
import { User } from '../entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDto) {
    return this.userService.createUser(input);
  }
}
