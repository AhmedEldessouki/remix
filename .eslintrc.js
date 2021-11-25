module.exports = {
  extends: [
    'eslint-config-kentcdodds',
    'eslint-config-kentcdodds/jest',
    'eslint-config-kentcdodds/jsx-a11y',
    'eslint-config-kentcdodds/react',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/alt-text': 'off', // it's not smart enough...
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
  },
}
