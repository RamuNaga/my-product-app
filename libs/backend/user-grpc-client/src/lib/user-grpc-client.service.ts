import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import {
  UserServiceClient,
  CreateUserRequest,
  CreateUserResponse,
  GetUserByIdRequest,
  GetUserByIdResponse,
  LoginRequest,
  LoginResponse,
  FindAllUsersRequest,
  FindAllUsersResponse,
  USER_SERVICE_NAME,
} from '@my-product-app/backend-proto/generated';

@Injectable()
export class UserGrpcClientService implements OnModuleInit {
  private userService!: UserServiceClient;

  constructor(
    @Inject('USER_SERVICE')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit(): void {
    this.userService =
      this.client.getService<UserServiceClient>(
        USER_SERVICE_NAME,
      );
  }

  createUser(
    request: CreateUserRequest,
  ): Observable<CreateUserResponse> {
    return this.userService.createUser(request);
  }

  login(
    request: LoginRequest,
  ): Observable<LoginResponse> {
    return this.userService.login(request);
  }

  getUserById(
    request: GetUserByIdRequest,
  ): Observable<GetUserByIdResponse> {
    return this.userService.getUserById(request);
  }

  findAllUsers(
    request: FindAllUsersRequest,
  ): Observable<FindAllUsersResponse> {
    return this.userService.findAllUsers(request);
  }
}
