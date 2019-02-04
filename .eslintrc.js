module.exports = {
   parser: 'babel-eslint',
   env: {
     browser: true,
     commonjs: true,
     es6: true,
     node: true,
     jest: true,
   },
   extends: ['eslint:recommended', 'plugin:react/recommended'],
   parserOptions: {
     ecmaFeatures: {
       experimentalObjectRestSpread: true,
       jsx: true,
     },
     sourceType: 'module',
   },
   plugins: ['react'],
   rules: {
     'react/prop-types': ['off'],
     'react/display-name': ['off'],
     'react/no-unescaped-entities': ['off'],
     indent: ['error', 3, {SwitchCase: 2}],
     'linebreak-style': ['error', 'windows'],
     quotes: ['error', 'single'],
     semi: ['error', 'always'],
     'no-console': ['error', {allow: ['clear', 'info', 'error', 'dir', 'trace']}],
     curly: 'error',
     'no-else-return': 'error',
     'no-unneeded-ternary': 'error',
     'no-useless-return': 'error',
     'no-var': 'error',
     'one-var': ['error', 'never'],
     'prefer-arrow-callback': 'error',
     strict: 'error',
     'symbol-description': 'error',
     yoda: ['error', 'never', {exceptRange: true}],
   },
 };