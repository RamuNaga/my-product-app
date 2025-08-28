const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  {
    ignores: ['**/dist'],
  },

  // Project-specific overrides
  {
    files: [
      'libs/frontend/ui/src/lib/components/**/*.{ts,tsx}',
      'libs/frontend/shared/src/lib/state/**/*.{ts,tsx}',
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@angular-eslint/prefer-inject': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'type:buildable',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:shared',
                'type:ui',
                'type:feature',
                'type:buildable',
              ],
            },
            {
              sourceTag: 'scope:frontend',
              onlyDependOnLibsWithTags: [
                'scope:frontend',
                'type:ui',
                'platform:angular',
                'type:shared',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'platform:angular',
                'type:shared',
              ],
            },
            {
              sourceTag: 'platform:angular',
              onlyDependOnLibsWithTags: [
                'platform:angular',
                'type:ui',
                'type:shared',
              ],
            },
            {
              sourceTag: 'scope:backend',
              onlyDependOnLibsWithTags: [
                'scope:backend',
                'type:shared',
                'type:buildable',
              ],
            },
            {
              sourceTag: 'type:backend',
              onlyDependOnLibsWithTags: [
                'type:backend',
                'type:shared',
                'type:buildable',
              ],
            },
          ],
        },
      ],
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
];
