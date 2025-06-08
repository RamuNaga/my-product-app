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
            '^@my-product-app/frontend-shared',
            '^@my-product-app/frontend-ui',
            '^@my-product-app/frontend-data-access',
          ],
          depConstraints: [
            // data-access can depend on shared, ui, buildable, and feature libs
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:shared',
                'type:ui',
                'type:buildable',
                'platform:angular',
              ],
            },
            // shared libs constraints
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
            // ui libs constraints
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:shared',
                'platform:angular',
              ],
            },
            // angular platform libs
            {
              sourceTag: 'platform:angular',
              onlyDependOnLibsWithTags: [
                'platform:angular',
                'type:shared',
                'type:ui',
              ],
            },
            // frontend scope constraints
            {
              sourceTag: 'scope:frontend',
              onlyDependOnLibsWithTags: [
                'scope:frontend',
                'type:shared',
                'type:ui',
                'type:feature',
                'type:buildable',
                'platform:angular',
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
