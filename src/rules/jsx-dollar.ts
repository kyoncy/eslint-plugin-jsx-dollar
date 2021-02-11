import { TSESLint, AST_NODE_TYPES } from "@typescript-eslint/experimental-utils";

export const jsxDollar: Omit<
  TSESLint.RuleModule<"removeDollar", []>,
  "docs"
> = {
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
        node.children.forEach(JSXChild => {
          if (JSXChild.type === AST_NODE_TYPES.JSXText && JSXChild.value.endsWith("$")) {
            context.report({
              node,
              messageId: "removeDollar",
              suggest: [
                {
                  messageId: "removeDollar",
                  fix: (fixer) => fixer.removeRange([JSXChild.range[1] - 1, JSXChild.range[1]]),
                },
              ],
            });
          }
        });
      },
    };
  },
};
