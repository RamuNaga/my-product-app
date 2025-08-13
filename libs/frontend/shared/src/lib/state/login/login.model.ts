import { User } from '@my-product-app/frontend-graphql-types';

export type LoginUser = Omit<User, '__typename'>;

export type LoginResponse = {
  accessToken: string;
  user: LoginUser;
};

export type LoginSuccessResponse = {
  status: 'success';
  data: LoginResponse;
};

export type LoginErrorResponse = {
  status: 'error';
  message: string;
  statusCode?: number;
};

export type LoginResult = LoginSuccessResponse | LoginErrorResponse;
