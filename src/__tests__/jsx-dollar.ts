import { TSESLint } from "@typescript-eslint/experimental-utils";
import { jsxDollar } from "../rules/jsx-dollar";

const ruleName = "jsx-dollar";
const tester = new TSESLint.RuleTester({
  parser: require.resolve("espree"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
});

describe("test", () => {
  tester.run(ruleName, jsxDollar, {
    valid: [
      { code: "<span>{`${1}`}</span>" },
      { code: "<span>Something{`${1}`}</span>" },
      { code: "<span>{`${1}`}Something</span>" },
      { code: "<span>{`${'string'}`}</span>" },
      { code: "<span>Something{`${'string'}`}</span>" },
      { code: "<span>{`${'string'}`}Something</span>" },
      { code: "<span>{`${variable}`}</span>" },
      { code: "<span>Something{`${variable}`}</span>" },
      { code: "<span>{`${variable}`}Something</span>" },
      { code: "<span>{`$`}</span>" },
      { code: "<span>Something$</span>" },
    ],
    invalid: [
      {
        code: "<span>${1}</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>{1}</span>",
      },
      {
        code: "<span>Something${1}</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>Something{1}</span>",
      },
      {
        code: "<span>${1}Something</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>{1}Something</span>",
      },
      {
        code: "<span>${'string'}</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>{'string'}</span>",
      },
      {
        code: "<span>Something${'string'}</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>Something{'string'}</span>",
      },
      {
        code: "<span>${'string'}Something</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>{'string'}Something</span>",
      },
      {
        code: "<span>${variable}</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>{variable}</span>",
      },
      {
        code: "<span>Something${variable}</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>Something{variable}</span>",
      },
      {
        code: "<span>${variable}Something</span>",
        errors: [{ messageId: "removeDollar" }],
        output: "<span>{variable}Something</span>",
      },
    ],
  });
});
