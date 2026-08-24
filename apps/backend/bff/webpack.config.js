const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join, resolve } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const prismaClients = [
  {
    alias: '@my-product-app/backend-prisma/company-client',
    source: resolve(
      workspaceRoot,
      'libs/backend/company-prisma/generated/company-client'
    ),
  },
  {
    alias: '@my-product-app/backend-prisma/company-location-client',
    source: resolve(
      workspaceRoot,
      'libs/backend/company-location-prisma/generated/company-location-client'
    ),
  },
  {
    alias: '@my-product-app/backend-prisma/product-client',
    source: resolve(
      workspaceRoot,
      'libs/backend/product-prisma/generated/product-client'
    ),
  },
  {
    alias: '@my-product-app/backend-prisma/workorder-client',
    source: resolve(
      workspaceRoot,
      'libs/backend/workorder-prisma/generated/workorder-client'
    ),
  },
  {
    alias: '@my-product-app/user-client',
    source: resolve(
      workspaceRoot,
      'libs/backend/user-prisma/generated/user-client'
    ),
  },
];

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

      const prismaClient = prismaClients.find(
        ({ alias }) =>
          request === alias ||
          request.startsWith(`${alias}/`)
      );

      if (prismaClient) {
        return callback(
          null,
          `commonjs ${prismaClient.alias}`
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
      'dist/apps/backend/bff'
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
            'libs/backend/proto/src/lib'
          ),
          to: '.',
          globOptions: {
            ignore: ['**/*.ts'],
          },
        },

        ...prismaClients.map(({ alias, source }) => ({
          from: source,
          to: `node_modules/${alias}`,
        })),
      ],
    }),
  ],
};