const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

module.exports = {
  target: 'node',

  externalsPresets: {
    node: true,
  },

  output: {
    path: join(__dirname, '../../../dist/apps/backend/user-grpc'),
    filename: 'main.js',
  },

  externals: [
    {
      '@prisma/client': 'commonjs @prisma/client',
      '.prisma/client': 'commonjs .prisma/client',
      '@prisma/adapter-pg': 'commonjs @prisma/adapter-pg',
    },

    function ({ request }, callback) {
      if (!request) {
        return callback();
      }

      /*
       * Keep Prisma generated clients outside webpack bundle.
       * This prevents Prisma 7 runtime from being transformed by webpack.
       */
      if (request.includes('generated') && request.includes('client')) {
        return callback(null, `commonjs ${request}`);
      }

      if (request.startsWith('@prisma/') || request.startsWith('.prisma/')) {
        return callback(null, `commonjs ${request}`);
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
      sourceMaps: false,
      watch: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(
            __dirname,
            '../../../libs/backend/proto/src/lib/user.proto'
          ),
          to: 'user.proto',
        },
      ],
    }),
  ],
};
