module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/extensions": [
      "error",
      {
        pattern: {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always-and-inside-groups",
      },
    ],
    "import/first": "error",
    "import/no-absolute-path": "error",
    "no-use-before-define": ["error", "nofunc"],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-sort-props": ["error"],
    "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
