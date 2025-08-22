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
import { firstValueFrom, tap } from 'rxjs';

import {
  AuthInterceptor,
  HttpService,
  RuntimeConfigStore,
  RuntimeEnvConfig,
} from '@my-product-app/frontend-core';
import { environment } from '../environments/environments';

import {
  //workorderStoreProvider,
  workorderListStoreProvider,
} from '@my-product-app/frontend-shared';

// ---------------------- Apollo Client Factory ----------------------
export function apolloClientFactory(): ApolloClientOptions<unknown> {
  const httpLink = inject(HttpLink);
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: '/graphql',
    }),
  };
}

// ---------------------- Runtime Config Loader ----------------------
export function loadRuntimeConfigFactory(
  configStore: RuntimeConfigStore,
  http: HttpService
): () => Promise<void> {
  return async () => {
    await firstValueFrom(
      http
        .get<RuntimeEnvConfig>(
          `/assets/runtime-config.${environment.envName}.json`
        )
        .pipe(
          tap((cfg) => {
            if (cfg) configStore.setConfig(cfg);
          })
        )
    );
  };
}

// ---------------------- Application Providers ----------------------
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

    // Global DI for Workorder stores
    //workorderStoreProvider,
    workorderListStoreProvider,
  ],
};
