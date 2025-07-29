export interface RuntimeEnvConfig {
  apiUrl: string;
  authUrl: string;
  productServiceUrl: string;
  featureFlags?: Record<string, boolean>;
}
