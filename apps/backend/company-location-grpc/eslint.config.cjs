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
            '^@my-product-app/backend-proto',
            '^@my-product-app/backend-proto/generated',
            '^@my-product-app/backend-prisma/company-location-prisma',
            '^@my-product-app/backend-prisma/company-location-client',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:company-location-service',
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
