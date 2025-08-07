import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  RegisterCompanyUserMutation,
  RegisterCompanyUserMutationVariables,
  RegisterCompanyUserDocument,
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

  registerCompanyUser(
    variables: RegisterCompanyUserMutationVariables
  ): Observable<boolean> {
    return this.apollo
      .mutate<
        RegisterCompanyUserMutation,
        RegisterCompanyUserMutationVariables
      >({
        mutation: RegisterCompanyUserDocument,
        variables,
      })
      .pipe(
        map((result) => {
          if (result.data?.registerCompanyUser != null) {
            return result.data.registerCompanyUser;
          }
          throw new Error('No data returned from registerCompanyUser mutation');
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
