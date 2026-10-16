// ESLint Config For ES6

const common = require('./modules/common');
const prettier = require('./modules/extends-prettier');
const standard = require('./modules/extends-standard');
const importX = require('./modules/plugins-import-x');
// const perfectionist = require('./modules/plugins-perfectionist');
const stylistic = require('./modules/plugins-stylistic');
const unusedImports = require('./modules/plugins-unused-imports');

module.exports = [
  // ...
  ...standard,
  ...common,
  ...stylistic,
  // ...perfectionist,
  ...unusedImports,
  ...importX,
  ...prettier
];
