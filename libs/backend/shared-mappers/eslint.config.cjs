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
            '^@my-product-app/backend-shared-types',
            '@my-product-app/backend-graphql-types',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: [
                'type:shared',
                'type:buildable',
                'type:proto',
              ],
            },

            {
              sourceTag: 'scope:logger',
              onlyDependOnLibsWithTags: [],
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
