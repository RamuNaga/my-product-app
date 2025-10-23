const baseConfig = require('../../../eslint.config.js');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.{ts,js,tsx,jsx}'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['^@my-product-app/backend-shared-types'],
          enforceBuildableLibDependency: true,
          depConstraints: [
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
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
