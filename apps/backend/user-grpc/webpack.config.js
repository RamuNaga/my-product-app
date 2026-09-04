const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const userPrismaClient = join(
  workspaceRoot,
  'libs/backend/user-prisma/generated/user-client'
);

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  /**
   * Important for pnpm/link dependencies.
   *
   * Without this, Webpack follows:
   *
   * node_modules/user-prisma-client
   *        ↓
   * libs/backend/user-prisma/generated/user-client
   *
   * and then bundles Prisma as workspace source.
   */
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
    symlinks: false,
  },

  /**
   * Explicitly keep generated Prisma client external.
   */
  externals: [
    {
      'user-prisma-client': 'commonjs user-prisma-client',
    },
  ],

  output: {
    path: join(
      workspaceRoot,
      'dist/apps/backend/user-grpc'
    ),
    filename: 'main.js',
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',

      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',

      assets: ['./src/assets'],

      optimization: false,
      outputHashing: 'none',

      generatePackageJson: true,

      sourceMaps: false,

      /**
       * Keep npm/package dependencies outside main.js.
       */
      externalDependencies: 'all',
    }),

    new CopyWebpackPlugin({
      patterns: [
        /**
         * gRPC proto
         */
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/user.proto'
          ),
          to: 'user.proto',
        },

        /**
         * Generated Prisma client.
         *
         * This satisfies:
         * require('user-prisma-client')
         *
         * when the built app runs.
         */
        {
          from: userPrismaClient,
          to: 'node_modules/user-prisma-client',
        },
      ],
    }),
  ],
};