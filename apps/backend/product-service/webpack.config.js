const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const productPrismaClient = join(
  workspaceRoot,
  'libs/backend/product-prisma/generated/product-client',
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
   * Keep the generated product Prisma client external.
   */
  externals: [
    {
      '@my-product-app/backend-prisma/product-client':
        'commonjs @my-product-app/backend-prisma/product-client',
    },
  ],

  output: {
    path: join(
      workspaceRoot,
      'dist/apps/backend/product-service',
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
         * Product gRPC definition.
         */
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/product.proto',
          ),
          to: 'product.proto',
        },

        /**
         * Copy the generated Prisma client to satisfy:
         *
         * require(
         *   '@my-product-app/backend-prisma/product-client'
         * )
         */
        {
          from: productPrismaClient,
          to: 'node_modules/@my-product-app/backend-prisma/product-client',
        },
      ],
    }),
  ],
};