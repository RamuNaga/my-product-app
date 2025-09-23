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
            '^@my-product-app/logger',
            '^@my-product-app/backend-prisma/user-client',
            '^@my-product-app/backend-prisma/Workorder-client',
          ],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: [
                'type:shared',
                'type:buildable',
                'type:user-prisma',
                'type:workorder-prisma',
              ],
            },
            {
              sourceTag: 'scope:user',
              onlyDependOnLibsWithTags: ['type:shared'],
            },
            {
              sourceTag: 'scope:product',
              onlyDependOnLibsWithTags: ['type:shared'],
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
