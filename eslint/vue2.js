// ESLint Config For ES6 + Vue2

const vue = require('eslint-plugin-vue');

const es6 = require('./es6');
const vuePlugin = require('./modules/plugins-vue');
// const vueA11y = require('./modules/plugins-vuejs-a11y');

module.exports = [
  ...es6,
  ...vue.configs['flat/vue2-recommended'],
  ...vuePlugin
  // ...vueA11y
];
