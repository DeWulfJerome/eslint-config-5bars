module.exports = {
  env: { browser: true, es6: true },
  extends: [
    "eslint:recommended",
    "prettier",
    "airbnb-typescript-prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-perf/recommended",
    "plugin:react-redux/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": [
      // define prettier rules here
      "error",
      {
        semi: true,
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
      },
    ],
    "react/react-in-jsx-scope": "off",
    indent: "off", // Avoid conflicts with prettier by eslint
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "only-multiline"],
    //  'arrow-body-style': ['error', 'as-needed'],
  },
  settings: { react: { version: "detect" } },
};
