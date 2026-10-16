// ESLint Config For ES6 + Vue2

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/extends-standard'),
    'plugin:vue/recommended',
    require.resolve('./modules/plugins-vue'),
    require.resolve('./modules/common')
  ]
};
