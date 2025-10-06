import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
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
import { UserGrpcService } from './user-grpc.service';

@Controller()
export class UserGrpcController {
  constructor(private readonly userGrpcService: UserGrpcService) {}

  // ----------------------------
  // RPC: CreateUser
  // ----------------------------
  @GrpcMethod('UserService', 'CreateUser')
  async createUser(data: CreateUserRequest): Promise<CreateUserResponse> {
    return this.userGrpcService.createUser(data);
  }

  // ----------------------------
  // RPC: Login
  // ----------------------------
  @GrpcMethod('UserService', 'Login')
  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.userGrpcService.login(data);
  }

  // ----------------------------
  // RPC: GetUserById
  // ----------------------------
  @GrpcMethod('UserService', 'GetUserById')
  async getUserById(data: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    return this.userGrpcService.getUserById(data);
  }

  // ----------------------------
  // RPC: FindAllUsers
  // ----------------------------
  @GrpcMethod('UserService', 'FindAllUsers')
  async findAllUsers(data: FindAllUsersRequest): Promise<FindAllUsersResponse> {
    return this.userGrpcService.findAllUsers(data);
  }
}
