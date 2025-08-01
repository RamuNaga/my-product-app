const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],

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
          allow: [
            '^@my-product-app/frontend-graphql-types',
            '^@my-product-app/frontend-data-access',
            '^@my-product-app/frontend-shared',
          ], // explicitly allow imports from shared lib
          depConstraints: [
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
            {
              sourceTag: 'scope:frontend',
              onlyDependOnLibsWithTags: [
                'scope:frontend',
                'type:shared',
                'type:ui',
                'platform:angular',
              ],
            },
            {
              sourceTag: 'platform:angular',
              onlyDependOnLibsWithTags: [
                'platform:angular',
                'type:shared',
                'type:ui',
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];
