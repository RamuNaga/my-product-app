import { ApplicationConfig, inject } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';

export function apolloClientFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink); 

  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: '/graphql', 
    }),
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    provideApollo(apolloClientFactory),
  ],
};
