// Perfectionist 排序插件
// 文档：https://perfectionist.dev/
// 说明：给对象属性、数组元素等进行排序

const perfectionist = require('eslint-plugin-perfectionist');

module.exports = [
  {
    plugins: { perfectionist },
    rules: {
      // import 排序交由 import-x/order 处理，这里不开启
      'perfectionist/sort-imports': 'off',
      // 数组 includes 排序
      'perfectionist/sort-array-includes': 'error',
      // 对象属性排序：按自然字母序升序
      'perfectionist/sort-objects': [
        'error',
        {
          ignoreCase: true,
          order: 'asc',
          partitionByNewLine: true,
          type: 'natural'
        }
      ]
    }
  }
];
