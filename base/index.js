module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.d.ts', '*.d.*.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    // ESLint core rules superseded by @typescript-eslint
    'dot-notation': 'off',

    // ESlint core
    curly: 'error',
    'default-case-last': 'error',
    eqeqeq: 'error',
    'no-console': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-new': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-backreference': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-object-spread': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],

    // @typescript-eslint
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'accessor',
        format: ['camelCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
        filter: {
          regex: '^__resolveType$',
          match: false,
        },
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
    '@typescript-eslint/no-unused-vars': 'off', // Let TypeScript check it
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/return-await': ['error', 'always'],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    // import
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-relative-packages': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [['builtin', 'external'], 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
};
