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
};