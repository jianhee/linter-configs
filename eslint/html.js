// ESLint Config For ES6 + HTML

const es6 = require('./es6');
const html = require('./modules/plugins-html');

module.exports = [
  // ...
  ...es6,
  ...html
];
