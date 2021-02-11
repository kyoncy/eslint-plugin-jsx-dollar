import { jsxDollar } from "./rules/jsx-dollar";

export = {
  rules: {
    jsxDollar: jsxDollar,
  },
  configs: {
    all: {
      plugins: ["jsx-dollar"],
      rules: {
        "jsx-dollar": "error",
      },
    },
  },
};
