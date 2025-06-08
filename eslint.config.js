const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
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
                'type:ui',
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
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
];
