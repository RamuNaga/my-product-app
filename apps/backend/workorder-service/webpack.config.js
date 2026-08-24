const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join, resolve } = require('path');

const workspaceRoot = join(__dirname, '../../../');

const workorderPrismaClient = resolve(
  workspaceRoot,
  'libs/backend/workorder-prisma/generated/workorder-client'
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
          '@my-product-app/backend-prisma/workorder-client' ||
        request.startsWith(
          '@my-product-app/backend-prisma/workorder-client/'
        )
      ) {
        return callback(
          null,
          'commonjs @my-product-app/backend-prisma/workorder-client'
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
      'dist/apps/backend/workorder-service'
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
            'libs/backend/proto/src/lib/workorder.proto'
          ),
          to: 'workorder.proto',
        },

        {
          from: workorderPrismaClient,
          to:
            'node_modules/@my-product-app/backend-prisma/workorder-client',
        },
      ],
    }),
  ],
};