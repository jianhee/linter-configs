// Stylistic 风格规则插件
// 文档：https://eslint.style/
// 说明：承接已废弃的风格规则，保证未来兼容。

const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      // 换行风格：LF
      '@stylistic/linebreak-style': ['error', 'unix'],
      // 语句末尾的分号：必须使用
      '@stylistic/semi': ['error', 'always'],
      // 对象属性的引号：如果有一个属性需要使用引号，那就全部都使用引号
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      // 箭头函数的参数圆括号：只有一个参数时不使用括号
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      // 函数左括号之前的空格：匿名函数有空格，命名函数无空格，异步箭头函数有空格
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', asyncArrow: 'always', named: 'never' }
      ]
    }
  }
];
