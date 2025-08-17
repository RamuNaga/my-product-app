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
            '^@my-product-app/backend-company',
            '^@my-product-app/backend-company-location',
            '@my-product-app/backend-registration',
            '@my-product-app/workorder',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'gateway',
              onlyDependOnLibsWithTags: [
                'shared',
                'product',
                'user',
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
