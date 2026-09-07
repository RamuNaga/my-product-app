const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../../dist/apps/backend/api-gateway'),
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
      watch: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(
            __dirname,
            '../../../libs/backend/proto/src/lib/*.proto'
          ),
          to: '[name][ext]',
        },
      ],
    }),
  ],
};