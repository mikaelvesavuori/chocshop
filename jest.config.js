module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "jest-coverage",
  testEnvironment: "node",
  transform: {
    "^.+\\.mjs$": "babel-jest",
  },
  moduleFileExtensions: ["js", "mjs", "ts"],
  testMatch: ["**/__tests__/*.test.+(js|mjs|ts)"],
};
