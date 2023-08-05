module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
      "plugin😡typescript-eslint/recommended",
      "plugin😛rettier/recommended",
      "prettier/@typescript-eslint",
    ],
    rules: {},
  };