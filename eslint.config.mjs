import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  {
    ignores: ['**/dist'],
  },

  // Project-specific overrides (relax rules for UI and shared state)
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
            // Buildable libs
            {
              sourceTag: 'type:buildable',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
            // Shared libs
            {
              sourceTag: 'type:shared',
              onlyDependOnLibsWithTags: ['type:shared', 'type:buildable'],
            },
            // Feature libs
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:shared',
                'type:feature',
                'type:buildable',
              ],
            },
            // Frontend scope libs
            {
              sourceTag: 'scope:frontend',
              onlyDependOnLibsWithTags: [
                'scope:frontend',
                'type:ui',
                'platform:angular',
                'type:shared',
              ],
            },
            // UI libs
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'platform:angular',
                'type:shared',
              ],
            },
            // Angular platform libs
            {
              sourceTag: 'platform:angular',
              onlyDependOnLibsWithTags: [
                'platform:angular',
                'type:ui',
                'type:shared',
              ],
            },
            // Backend scope libs
            {
              sourceTag: 'scope:backend',
              onlyDependOnLibsWithTags: [
                'scope:backend',
                'type:shared',
                'type:buildable',
              ],
            },
            // Backend type libs
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
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {},
  },
];
