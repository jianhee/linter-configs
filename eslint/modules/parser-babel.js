// Babel 解析器
// 文档：https://www.npmjs.com/package/@babel/eslint-parser
// 安装：yarn add @babel/core @babel/eslint-parser
// 说明：用于检查所有有效的 Babel 代码。ESLint 默认的解析器和核心规则仅支持最新的正式 ECMAScript 标准，不支持 Babel 提供的实验性语法（如新特性）和非标准语法（如 Flow 或 TypeScript 类型）。Babel 解析器能让 ESLint 在 Babel 转换后的源代码上运行。

module.exports = {
  parser: '@babel/eslint-parser'
};
