// Prettier 可共享配置
// 文档：https://www.npmjs.com/package/eslint-config-prettier
// 说明：关闭所有与 Prettier 冲突的 ESLint 规则，让 Prettier 全权负责格式化。
//      必须放在配置数组的最后，以覆盖前面的规则。

const prettier = require('eslint-config-prettier');

module.exports = [prettier];
