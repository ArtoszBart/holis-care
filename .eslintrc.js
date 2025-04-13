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
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'import/order': 'off',
    'prettier/prettier': 'off',
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['Text'],
            message:
              "Please use CustomText component instead of 'react-native/Text'.",
          },
        ],
      },
    ],
  },
  env: {
    node: true,
  },
};
