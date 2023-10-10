module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:astro/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.astro']
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
      }
    },
    {
      files: ['.jsx', '.tsx'],
      extends: [
        'plugin:react/recommended'
      ],
      plugins: [
        'react'
        // 'no-relative-import-paths',
        // 'import-path'
      ],
      rules: {
        'react/jsx-wrap-multilines': [2, {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'ignore',
          logical: 'ignore',
          prop: 'ignore'
        }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': [1, 2]
      }
    }
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-console': 1,
    'no-use-before-define': 0,
    '@typescript-eslint/semi': 'off',
    'no-unexpected-multiline': 'error',
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': 2,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    '@typescript-eslint/strict-boolean-expressions': 'off'
    // 'import-path/parent-depth': ['warn', 2],
    // 'import-path/forbidden': ['error', ['/index$']],
    // 'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true }]
  }
}
