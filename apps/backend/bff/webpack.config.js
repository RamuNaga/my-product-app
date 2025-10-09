const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../../dist/apps/backend/bff'),
    ...(process.env.NODE_ENV !== 'production' && {
      devtoolModuleFilenameTemplate: (info) => {
        // Skip source maps for Prisma-generated code
        if (info.absoluteResourcePath.includes('/generated/')) {
          return '';
        }
        return '[absolute-resource-path]';
      },
    }),
  },

  externals: [
    // Ignore all Prisma generated clients at runtime
    function ({ request }, callback) {
      if (request?.includes('/generated/') && request?.includes('-client')) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    },
  ],

  ignoreWarnings: [
    // Suppress source map warnings from Prisma-generated runtime code
    {
      module: /generated\/.*\/runtime\/library\.js/,
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
  ],
};
