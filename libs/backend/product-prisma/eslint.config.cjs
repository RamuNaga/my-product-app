const baseConfig = require('../../../eslint.config.js');

module.exports = [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      'libs/backend/product-prisma/generated/**',
      'libs/backend/product-prisma/generated/**/*',
    ],
  },
  ...baseConfig,
  {
    files: ['**/*.{ts,js,tsx,jsx}'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: [
            '@my-product-app/logger',
            '@my-product-app/backend-prisma/product-client',
          ],

          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:product-prisma',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
  },
];
