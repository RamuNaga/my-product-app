const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  displayName: 'backend-product-service',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    ...Object.fromEntries(
      Object.entries(nxPreset.transform ?? {}).filter(
        ([pattern]) => !pattern.includes('js'),
      ),
    ),
    '^.+\\.ts$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/libs/backend/product-prisma/generated/',
  ],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/apps/backend/product-service',
};
