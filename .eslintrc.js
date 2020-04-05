module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off', // turn off the lock to modify parameters.
    'camelcase': 'off', // turn off the camel case obligation on variables name
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }] // No error when declare variable 'next' with no use
  },
};
