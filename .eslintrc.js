module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'only-warn',
    '@typescript-eslint',
    'jest',
    'import',
    'prettier',
    'react-hooks',
  ],
  env: {
    browser: true,
    'jest/globals': true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: '.',
      },
    },
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-use-before-define': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-key': 2,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', '**/*.test.ts', 'webpack/*'] },
    ],
    'import/no-unresolved': 0,
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: '~/**', group: 'parent', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
  },
};
