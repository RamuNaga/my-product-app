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
          prefix: 'core',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'core',
          style: 'kebab-case',
        },
      ],
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            '^@my-product-app/frontend-core',
            '^@my-product-app/frontend-shared',
          ],
          depConstraints: [
            {
              sourceTag: 'type:core',
              onlyDependOnLibsWithTags: ['type:core'],
            },
            {
              sourceTag: 'platform:angular',
              onlyDependOnLibsWithTags: [
                'platform:angular',
                'type:core',
                'type:shared',
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
