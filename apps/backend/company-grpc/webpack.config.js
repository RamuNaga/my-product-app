const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const companyPrismaClient = join(
  workspaceRoot,
  'libs/backend/company-prisma/generated/company-client',
);

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  /**
   * Prevent Webpack from following the pnpm symlink into the
   * generated Prisma client workspace source.
   */
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
    symlinks: false,
  },

  /**
   * Keep the generated company Prisma client external.
   */
  externals: [
    {
      '@my-product-app/backend-prisma/company-client':
        'commonjs @my-product-app/backend-prisma/company-client',
    },
  ],

  output: {
    path: join(workspaceRoot, 'dist/apps/backend/company-grpc'),
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
         * Company gRPC definition.
         */
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/company.proto',
          ),
          to: 'company.proto',
        },

        /**
         * Copy the generated Prisma client to satisfy:
         *
         * require(
         *   '@my-product-app/backend-prisma/company-client'
         * )
         */
        {
          from: companyPrismaClient,
          to: 'node_modules/@my-product-app/backend-prisma/company-client',
        },
      ],
    }),
  ],
};