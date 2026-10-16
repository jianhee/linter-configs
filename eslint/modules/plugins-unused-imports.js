// 未使用的 import 插件
// 文档：https://www.npmjs.com/package/eslint-plugin-unused-imports
// 说明：自动检测并删除未使用的 import 语句和变量

const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
  {
    plugins: { 'unused-imports': unusedImports },
    rules: {
      // 关闭核心的 no-unused-vars，交由 unused-imports 处理
      'no-unused-vars': 'off',
      // 未使用的 import：报错
      'unused-imports/no-unused-imports': 'error',
      // 未使用的变量：警告
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ]
    }
  }
];
