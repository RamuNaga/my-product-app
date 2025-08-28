const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],

  // TypeScript files
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^@my-product-app/frontend-graphql-types'], // allow self imports
          depConstraints: [
            {
              sourceTag: 'type:graphql-types',
              onlyDependOnLibsWithTags: [
                'type:graphql-types',
                'type:shared',
                'type:buildable',
              ],
            },
            {
              sourceTag: 'scope:frontend',
              onlyDependOnLibsWithTags: [
                'scope:frontend',
                'type:shared',
                'type:ui',
                'platform:angular',
                'type:graphql-types',
              ],
            },
          ],
        },
      ],
    },
  },

  // HTML files
  {
    files: ['**/*.html'],
    rules: {},
  },

  // Override for generated GraphQL files
  {
    files: ['libs/frontend/graphql-types/src/lib/generated/**/*.ts'],
    rules: {
      '@angular-eslint/prefer-inject': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
