// Vue 无障碍插件
// 文档：https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility
// 说明：为 Vue 模板添加可访问性检查规则。

const vuejsA11y = require('eslint-plugin-vuejs-accessibility');

module.exports = [
  {
    files: ['**/*.vue'],
    plugins: { 'vuejs-accessibility': vuejsA11y },
    rules: {
      // 图片必须有 alt 属性
      'vuejs-accessibility/alt-text': 'error',
      // 锚点元素必须有内容
      'vuejs-accessibility/anchor-has-content': 'error',
      // 表单控件必须有关联的 label
      'vuejs-accessibility/form-control-has-label': 'error',
      // 标题元素必须有内容
      'vuejs-accessibility/heading-has-content': 'error',
      // iframe 必须有 title
      'vuejs-accessibility/iframe-has-title': 'error',
      // 禁止使用正的 tabindex（会破坏自然焦点顺序）
      'vuejs-accessibility/tabindex-no-positive': 'error'
    }
  }
];
