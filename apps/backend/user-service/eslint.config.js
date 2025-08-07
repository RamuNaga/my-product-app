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
            '^@my-product-app/prisma',
            '^@my-product-app/user',
            '@my-product-app/backend-registration',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:user-service',
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
