const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../../dist/apps/backend/user-grpc'),
  },
  externals: [
    ({ request }, callback) => {
      if (!request) return callback();

      if (
        request.includes('@prisma') ||
        request.includes('prisma') ||
        request.includes('.prisma') ||
        request.includes('client/runtime')
      ) {
        return callback(null, 'commonjs ' + request);
      }

      callback();
    },
  ],

  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
  },

  optimization: {
    minimize: false,
  },

  ignoreWarnings: [
    {
      module: /prisma|generated|runtime/,
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
      sourceMaps: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'libs/backend/proto/src/lib/user.proto',
          to: 'user.proto',
        },
      ],
    }),
  ],
};
