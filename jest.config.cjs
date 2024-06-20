module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/**/*.test.(ts|tsx|js|jsx)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
