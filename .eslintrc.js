module.exports = {
  "parser": "babel-eslint",
  extends: ["prettier","eslint:recommended",
  "plugin:react/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "newline-per-chained-call": [2],
    'linebreak-style': 0,

    // REACT
      "react/react-in-jsx-scope": 0,
      "react/prop-types": [2, { ignore: ['theme', 'children', 'router', 'className'] }],
      "react/no-unescaped-entities": 0,
  },
  globals: {
    Log: true,
    process: true,
    console: 1,
    React: 1,
    global: 1,
    document: 1,
    require: 1
  },
};
