const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join, resolve } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const companyLocationPrismaClient = resolve(
  workspaceRoot,
  'libs/backend/company-location-prisma/generated/company-location-client'
);

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  externals: [
    function ({ request }, callback) {
      if (!request) {
        return callback();
      }

      if (
        request ===
          '@my-product-app/backend-prisma/company-location-client' ||
        request.startsWith(
          '@my-product-app/backend-prisma/company-location-client/'
        )
      ) {
        return callback(
          null,
          'commonjs @my-product-app/backend-prisma/company-location-client'
        );
      }

      callback();
    },

    {
      '@prisma/adapter-pg': 'commonjs @prisma/adapter-pg',
      '@prisma/client-runtime-utils':
        'commonjs @prisma/client-runtime-utils',
    },
  ],

  output: {
    path: join(
      workspaceRoot,
      'dist/apps/backend/company-location-grpc'
    ),
    filename: 'main.js',
  },

  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },

  optimization: {
    minimize: false,
  },

  ignoreWarnings: [
    {
      module: /generated[\\/].*runtime[\\/].*\.js$/,
      message: /Failed to parse source map/,
    },
  ],

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
      watch: false,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/company-location.proto'
          ),
          to: 'company-location.proto',
        },

        {
          from: companyLocationPrismaClient,
          to:
            'node_modules/@my-product-app/backend-prisma/company-location-client',
        },
      ],
    }),
  ],
};