module.exports = {
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(s?css|less)$': 'react-loader-spinner'
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!jest.config.js',
    '!webpack-build-utils/**',
    '!webpack.config.js',
    '!webpack.common.js',
    '!**/dist/**',
    '!README.md',
    'Procfile',
    '!package.json',
    '!package-lock.json',
    '!**/coverage/**',
    '!src/store/**',
    '!src/index.js',
    '!**/*.css',
    '!webpack.config.js',
    '!src/utils/**'
  ]
};
