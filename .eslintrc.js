module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ["*.js"],
      extends: [
        '@nuxtjs',
        'plugin:prettier/recommended'
      ],
      rules: {
        'dot-notation': 'off',
        'no-console': 'off'
      }
    },
    {
      files: ["*.ts","*.vue"],
      extends: [
        '@nuxtjs',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      // https://qiita.com/markey/items/cfeb2a07e11d43676505
      // https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
      // parserに'vue-eslint-parser'を指定し、'@typescript-eslint/parser'はparserOptionsに指定する
      parser:  'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
          legacyDecorators: true
        },
        warnOnUnsupportedTypeScriptVersion: false
      },
      rules: {
        'dot-notation': 'off',
        'no-console': 'off',
        'import/no-mutable-exports': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        "@typescript-eslint/ban-ts-ignore": "off",
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
        'vue/html-self-closing': ['error', {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }]
      }
    }
  ]
}
