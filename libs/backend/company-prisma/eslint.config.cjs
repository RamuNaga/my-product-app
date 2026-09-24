const baseConfig = require('../../../eslint.config.js');

module.exports = [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      'libs/backend/user-prisma/generated/**',
      'libs/backend/user-prisma/generated/**/*',
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
            '^@my-product-app/logger',
            '^@my-product-app/backend-prisma/company-client',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:user-prisma',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredDependencies: ['@prisma/client'],
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
  },
];
