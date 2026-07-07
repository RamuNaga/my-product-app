import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: './schema.prisma',

  datasource: {
    url: env('DATABASE_URL_USER'),
  },

  migrations: {
    path: './migrations',
  },
});
