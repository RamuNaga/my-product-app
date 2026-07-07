const baseConfig = require('../../../eslint.config.js');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{ts,js,tsx,jsx}'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: [
            '^@my-product-app/backend-shared',
            '^@my-product-app/product',
            '^@my-product-app/user',
            '^@my-product-app/user-grpc-client',
            '^@my-product-app/registration',
            '^@my-product-app/backend-prisma/user-prisma',
            '^@my-product-app/company-grpc-client',
            '^@my-product-app/company-location-grpc-client',
            '^@my-product-app/backend-registration',
            '^@my-product-app/workorder',
            '^@my-product-app/backend-proto',
            '^@my-product-app/backend-graphql-types',
            '^@my-product-app/backend-shared-types',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'bff',
              onlyDependOnLibsWithTags: [
                'shared',
                'product',
                'user',
                'registration',
                'company',
                'company-location',
                'workorder',
              ],
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
