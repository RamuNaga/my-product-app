import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  SignupMutation,
  SignupMutationVariables,
  SignupDocument,
  LoginMutationVariables,
  LoginMutation,
  LoginDocument,
} from '@my-product-app/frontend-graphql-types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@my-product-app/frontend-core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly httpService = inject(HttpService);
  constructor(private apollo: Apollo) {}

  signup(
    variables: SignupMutationVariables
  ): Observable<SignupMutation['createUser']> {
    return this.apollo
      .mutate<SignupMutation, SignupMutationVariables>({
        mutation: SignupDocument,
        variables,
      })
      .pipe(
        map((result) => {
          if (result.data) {
            return result.data.createUser;
          }
          throw new Error('No data returned from signup mutation');
        })
      );
  }
  login(variables: LoginMutationVariables): Observable<LoginMutation['login']> {
    return this.apollo
      .mutate<LoginMutation, LoginMutationVariables>({
        mutation: LoginDocument,
        variables,
      })
      .pipe(
        map((result) => {
          if (result.data) {
            return result.data.login;
          }
          throw new Error('No data returned from login mutation');
        })
      );
  }
}
