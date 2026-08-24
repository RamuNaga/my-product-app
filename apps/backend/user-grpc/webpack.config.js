const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join, resolve } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const userPrismaClient = resolve(
  workspaceRoot,
  'libs/backend/user-prisma/generated/user-client'
);

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  /**
   * IMPORTANT:
   *
   * Do NOT let webpack bundle the generated Prisma client.
   *
   * The TypeScript path:
   *
   * @my-product-app/user-client
   *
   * points to:
   *
   * libs/backend/user-prisma/generated/user-client
   *
   * But at runtime we want Node to load the copied package from:
   *
   * dist/apps/backend/user-grpc/node_modules/@my-product-app/user-client
   */
  externals: [
    function ({ request }, callback) {
      if (!request) {
        return callback();
      }

      /*
       * This is the important part.
       *
       * Webpack sees the original module request as:
       *
       * @my-product-app/user-client
       *
       * so externalize that request directly.
       */
      if (
        request === '@my-product-app/user-client' ||
        request.startsWith('@my-product-app/user-client/')
      ) {
        return callback(
          null,
          `commonjs ${request}`
        );
      }

      /*
       * Also protect the generated Prisma client if webpack
       * reaches it using its filesystem path.
       */
      if (
        request === userPrismaClient ||
        request.startsWith(`${userPrismaClient}/`) ||
        request.includes(
          'libs/backend/user-prisma/generated/user-client'
        )
      ) {
        return callback(
          null,
          'commonjs @my-product-app/user-client'
        );
      }

      /*
       * Keep these Prisma dependencies external as well.
       */
      if (request === '@prisma/adapter-pg') {
        return callback(
          null,
          'commonjs @prisma/adapter-pg'
        );
      }

      if (request === '@prisma/client-runtime-utils') {
        return callback(
          null,
          'commonjs @prisma/client-runtime-utils'
        );
      }

      return callback();
    },
  ],

  output: {
    path: join(
      workspaceRoot,
      'dist/apps/backend/user-grpc'
    ),
    filename: 'main.js',
  },

  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
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

      /*
       * This is important because we need:
       *
       * dist/apps/backend/user-grpc/node_modules/@my-product-app/user-client
       */
      generatePackageJson: true,

      sourceMaps: false,

      watch: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/user.proto'
          ),
          to: 'user.proto',
        },

        /*
         * Copy the complete generated Prisma client.
         */
        {
          from: userPrismaClient,
          to: 'node_modules/@my-product-app/user-client',
        },
      ],
    }),
  ],
};