module.exports = {
  extends: 'gsandf-react',
  env: {
    browser: true,
    jest: true
  },
  globals: {
    __DEV__: true
  },
  parser: 'babel-eslint',
  rules: {
    'array-callback-return': 'error',
    'no-extra-label': 'error',
    'no-native-reassign': 'error',
    'no-restricted-syntax': ['error'],
    'no-unused-labels': 'error',
    'no-useless-concat': 'error',
    radix: ['error', 'as-needed'],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'error',
    'require-yield': 'error',
    'sort-keys': 'off'
  }
};
