const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  output: {
    path: resolve(__dirname, '../../../dist/apps/backend/api-gateway'),
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
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          context: resolve(
            __dirname,
            '../../../libs/backend/proto/src/lib'
          ),
          from: '*.proto',
          to: '[name][ext]',
          noErrorOnMissing: false,
        },
      ],
    }),
  ],
};