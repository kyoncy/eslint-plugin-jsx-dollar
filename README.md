# eslint-plugin-jsx-dollar
Eslint plugin that check JSXText's unnecessary template literal `$` character.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-jsx-dollar.svg)](https://www.npmjs.com/package/eslint-plugin-jsx-dollar)
[![minified size](https://img.shields.io/bundlephobia/min/eslint-plugin-jsx-dollar/latest)](https://bundlephobia.com/result?p=eslint-plugin-jsx-dollar)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/eslint-plugin-jsx-dollar/latest)](https://bundlephobia.com/result?p=eslint-plugin-jsx-dollar)

## Install
```
yarn add -D eslint-plugin-jsx-dollar
```

`.eslintrc.js`

```js
module.exports = {
  "plugins": [
    ...,
    "jsx-dollar"
  ],
  "rules": [
    ...,
    "jsx-dollar/jsxDollar": "error",
  ]
  ...,
}
```

## Example
When using JavaScript template literals, use `` `${expression}` ``.
But, we rarely typo `` ${} `` in JSX text.

Details are shown below.

```tsx
const text = "sample";

export const Success: React.FC = () => {
  return (
    <span>{`${text}`}</span>
    // Equals <span>sample</span>
  );
};

export const Failed: React.FC = () => {
  return (
    <span>${text}</span>
    // Equals <span>$sample</span>
  );
};
```

## Lisence
MIT
