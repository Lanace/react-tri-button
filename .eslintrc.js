module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src", "./src", "./"]
      }
    }
  },
  "extends": "airbnb-base",
  "plugins": [ "import", "html" ],
  "rules": {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    "no-console": "warn",
    "quotes": [ "error", "single" ],
    "no-underscore-dangle": "warn",
    "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true }],
    "comma-dangle": [ "error", "never"],
    "linebreak-style": 0,
    "function-paren-newline": 0
  }
};
