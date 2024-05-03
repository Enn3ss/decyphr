module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue']
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [{
    files: ['test/**.spec.js'],
    env: {
      jest: true
    },
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow paren-less arrow functions
      'arrow-parens': 'off',
      'one-var': 'off',
      'no-void': 'off',
      'multiline-ternary': 'off',
      'operator-linebreak': ['error', 'after'],
      'import/first': 'off',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      // The core 'import/named' rules
      // does not work with type definitions
      'import/named': 'off',
      'prefer-promise-reject-errors': 'off',
      quotes: ['warn', 'single', { avoidEscape: true }],
      // this rule, if on, would require explicit return type on the render function
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false
          }
        }
      ],
      // in plain CommonJS modules, you can't use import foo = require('foo') to pass this rule, so it has to be
      // disabled
      '@typescript-eslint/no-var-requires': 'off',
      // Prevents using variable or function names already defined by the outer scope
      '@typescript-eslint/no-shadow': 'error',
      // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      indent: ['error', 4, {
        SwitchCase: 1
      }],
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      'linebreak-style': ['error', (require('os').EOL === '\r\n' ? 'windows' : 'unix')],
      'max-len': ['error', { code: 120 }],
      'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
      'no-var': 'error',
      'vue/script-indent': ['error', 4, {
        switchCase: 1
      }],
      'vue/html-indent': ['error', 4, {}],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'never'
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: 1
      }],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'beside',
        multiline: 'below'
      }],
      'vue/multi-word-component-names': 'off'
    }
  }]
}