const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const companyLocationPrismaClient = join(
  workspaceRoot,
  'libs/backend/company-location-prisma/generated/company-location-client',
);

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  /**
   * Prevent Webpack from following pnpm symlinks into the
   * generated Prisma client workspace source.
   */
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
    symlinks: false,
  },

  /**
   * Keep the generated company-location Prisma client external.
   */
  externals: [
    {
      '@my-product-app/backend-prisma/company-location-client':
        'commonjs @my-product-app/backend-prisma/company-location-client',
    },
  ],

  output: {
    path: join(
      workspaceRoot,
      'dist/apps/backend/company-location-grpc',
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
       * Keep package dependencies outside main.js.
       */
      externalDependencies: 'all',
    }),

    new CopyWebpackPlugin({
      patterns: [
        /**
         * Company-location gRPC definition.
         */
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/company-location.proto',
          ),
          to: 'company-location.proto',
        },

        /**
         * Copy the generated Prisma client to satisfy:
         *
         * require(
         *   '@my-product-app/backend-prisma/company-location-client'
         * )
         */
        {
          from: companyLocationPrismaClient,
          to: 'node_modules/@my-product-app/backend-prisma/company-location-client',
        },
      ],
    }),
  ],
};