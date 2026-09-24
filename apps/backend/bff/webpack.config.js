const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

const workspaceRoot = join(__dirname, '../../../');

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
    symlinks: false,
  },

  output: {
    path: join(workspaceRoot, 'dist/apps/backend/bff'),
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
       * Keep normal npm dependencies outside main.js.
       */
      externalDependencies: 'all',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/user.proto',
          ),
          to: 'user.proto',
        },
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/company.proto',
          ),
          to: 'company.proto',
        },
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/company-location.proto',
          ),
          to: 'company-location.proto',
        },
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/product.proto',
          ),
          to: 'product.proto',
        },
        {
          from: join(
            workspaceRoot,
            'libs/backend/proto/src/lib/workorder.proto',
          ),
          to: 'workorder.proto',
        },
      ],
    }),
  ],
};