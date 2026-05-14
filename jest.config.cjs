module.exports = {
  rootDir : './src',
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testEnvironment: "node",
  verbose: true,
    transformIgnorePatterns: [
    "node_modules/(?!(uuid)/)"
  ],
  setupFilesAfterEnv: ["./shared/infra/testing/expect-helpers.ts"],
  collectCoverage: true,

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};