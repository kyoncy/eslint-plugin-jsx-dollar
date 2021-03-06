import { TSESLint } from "@typescript-eslint/experimental-utils";

export const jsxDollar: TSESLint.RuleModule<"removeDollar", []> = {
  meta: {
    type: "suggestion",
    docs: {
      category: "Possible Errors",
      description: "Check JSXText's unnecessary `$` character.",
      recommended: "error",
      url: "",
    },
    messages: {
      removeDollar: "Remove unnecessary $ character.",
    },
    schema: [],
    fixable: "code",
  },
  create: (context) => {
    return {
      JSXElement(node) {
        node.children.forEach((JSXChild, index) => {
          if (JSXChild.type === "JSXText" && JSXChild.value.endsWith("$")) {
            const nextJSXChild = node.children?.[index + 1];
            if (nextJSXChild && nextJSXChild.type === "JSXExpressionContainer") {
              context.report({
                node,
                messageId: "removeDollar",
                fix(fixer) {
                  return fixer.removeRange([JSXChild.range[1] - 1, JSXChild.range[1]]);
                },
              });
            }
          }
        });
      },
    };
  },
};
