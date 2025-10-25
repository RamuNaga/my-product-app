import { Injectable, Inject } from '@nestjs/common';
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

import { CreateUserInput } from '@my-product-app/backend-graphql-types';
import { mapGraphQLUserRoleToProto } from '@my-product-app/backend-shared-mappers';

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { status } from '@grpc/grpc-js';

@Injectable()
export class UserGrpcClientService {
  private userService!: UserServiceClient;

  constructor(@Inject('USER_SERVICE') private readonly client: ClientGrpc) {}

  // Called once after module init
  onModuleInit() {
    this.userService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  createUser(input: CreateUserInput): Observable<CreateUserResponse> {
    const request: CreateUserRequest = {
      ...input,
      role: mapGraphQLUserRoleToProto(input.role),
      companyId: input.companyId ?? 0,
    };

    return this.userService.createUser(request).pipe(
      map((response) => {
        const { password, ...safeResponse } = response as any;
        return safeResponse as CreateUserResponse;
      }),
      catchError((error) => {
        if (error.code === status.INVALID_ARGUMENT) {
          return throwError(() => new Error('Invalid email format.'));
        } else if (error.code === status.ALREADY_EXISTS) {
          return throwError(() => new Error('Email already registered.'));
        } else {
          return throwError(() => new Error('User creation failed.'));
        }
      })
    );
  }

  /** Get user by ID */
  getUserById(request: GetUserByIdRequest): Observable<GetUserByIdResponse> {
    return this.userService.getUserById(request);
  }

  /** Login user */
  login(request: LoginRequest): Observable<LoginResponse> {
    return this.userService.login(request);
  }

  /** Get all users (with pagination or filters) */
  findAllUsers(request: FindAllUsersRequest): Observable<FindAllUsersResponse> {
    return this.userService.findAllUsers(request);
  }
}
