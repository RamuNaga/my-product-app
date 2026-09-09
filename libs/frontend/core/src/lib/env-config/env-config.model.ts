export interface RuntimeEnvConfig {
  apiUrl: string;
  authUrl: string;
  apigateUrl: string;
  featureFlags?: Record<string, boolean>;
}
