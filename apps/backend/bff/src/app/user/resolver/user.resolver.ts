import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserGrpcClientService } from '@my-product-app/user';
import {
  CreateUserInput,
  LoginInput,
  User,
} from '@my-product-app/backend-graphql-types';
import {
  CreateUserResponse,
  LoginResponse,
} from '@my-product-app/backend-proto/generated';
import { BaseGrpcResolver } from '../../resolvers/base-user.resolver';

@Resolver(() => User)
export class UserResolver extends BaseGrpcResolver(UserGrpcClientService) {
  constructor(protected readonly grpcService: UserGrpcClientService) {
    super(grpcService);
  }

  @Mutation(() => User)
  async createUser(
    @Args('input') input: CreateUserInput
  ): Promise<CreateUserResponse> {
    return this.handleGrpcCall(this.grpcService.createUser(input));
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<LoginResponse> {
    return this.handleGrpcCall(this.grpcService.login(loginInput));
  }
}
