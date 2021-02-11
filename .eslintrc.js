module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
    "local-rules",
  ],
  "rules": {
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "always-multiline",
    }],
    "semi": ["error", "always"],
    "no-extra-semi": "error",
    "quotes": ["error", "double"],
    "space-before-blocks": ["error", { "functions": "always" }],
    "no-undef": ["off"],
    "local-rules/jsxDollar": ["error"],
  },
};
