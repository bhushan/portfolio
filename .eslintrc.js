module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/strongly-recommended',
    'plugin:nuxt/recommended',
  ],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    semi: [
      'error',
      'always',
    ],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/prop-name-casing': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    camelcase: 'off',
  },
};
