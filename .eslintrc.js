module.exports = {
  root: true,
  env: {
    es2015: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: module,
    tsconfigRootDir: __dirname,
    project: ['tsconfig.eslint.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, {SwitchCase: 1}],
    'object-curly-spacing': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {allowTemplateLiterals: true}],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
  },
};
