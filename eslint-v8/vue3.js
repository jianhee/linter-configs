// ESLint Config For ES6 + Vue3

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/extends-standard'),
    'plugin:vue/vue3-recommended',
    require.resolve('./modules/plugins-vue'),
    require.resolve('./modules/common')
  ]
};
