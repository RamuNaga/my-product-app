import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserGrpcClientService } from '@my-product-app/user-grpc-client';
import {
  CreateUserInput,
  LoginInput,
  User,
  LoginResponse as LoginResponseGql,
} from '@my-product-app/backend-graphql-types';
import { CreateUserResponse } from '@my-product-app/backend-proto/generated';
import { BaseGrpcResolver } from '../../resolvers/base.resolver';
import { mapProtoUserRoleToGraphQL } from '@my-product-app/backend-shared-mappers';

@Resolver(() => User)
export class UserResolver extends BaseGrpcResolver(UserGrpcClientService) {
  constructor(protected readonly grpcService: UserGrpcClientService) {
    super(grpcService);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') input: CreateUserInput
  ): Promise<CreateUserResponse> {
    return this.handleGrpcCall(this.grpcService.createUser(input));
  }

  @Mutation(() => LoginResponseGql)
  async login(
    @Args('loginInput') loginInput: LoginInput
  ): Promise<LoginResponseGql> {
    const grpcResponse = await this.handleGrpcCall(
      this.grpcService.login(loginInput)
    );

    return {
      accessToken: grpcResponse.accessToken,
      user: {
        id: grpcResponse.id,
        email: grpcResponse.email,
        username: grpcResponse.username,
        role: mapProtoUserRoleToGraphQL(grpcResponse.role),
        companyId: grpcResponse.companyId,
        createdAt: grpcResponse.createdAt,
        updatedAt: grpcResponse.updatedAt,
      },
    };
  }
}
