module.exports = {
  extends: [
    'expo',
    'prettier',
    'universe',
    'universe/native',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'prettier/prettier': 'off',
  },
  env: {
    node: true,
  },
};
