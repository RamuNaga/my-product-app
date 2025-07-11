import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import {
  AuthInterceptor,
  HttpService,
  RuntimeConfigStore,
  RuntimeEnvConfig,
} from '@my-product-app/frontend-shared';
import { environment } from '../environments/environments';

export function apolloClientFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);

  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: '/graphql',
    }),
  };
}

export function loadRuntimeConfigFactory(
  configStore: RuntimeConfigStore,
  http: HttpService
) {
  return () =>
    http
      .get<RuntimeEnvConfig>(
        `/assets/runtime-config.${environment.envName}.json`
      ) // or dynamic
      .toPromise()
      .then((config) => {
        if (config) configStore.setConfig(config);
      });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: APP_INITIALIZER,
      useFactory: loadRuntimeConfigFactory,
      deps: [RuntimeConfigStore, HttpService],
      multi: true,
    },
    provideRouter(appRoutes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideApollo(apolloClientFactory),
  ],
};
