import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  SignupMutation,
  SignupMutationVariables,
  SignupDocument,
} from '@my-product-app/frontend-shared';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
