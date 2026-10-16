// StyleLint 基础配置
// 文档：https://stylelint.io/

module.exports = {
  // 插件
  plugins: [],

  // 可共享配置
  extends: [],

  // 规则集
  rules: {
    // 字体列表中是否缺少通用系列：不校验
    'font-family-no-missing-generic-family-keyword': null,
    // 是否允许特异性较低的选择器在特异性较高的选择器之后出现：不校验
    'no-descending-specificity': null,
    // 规则块前的空行：不使用
    'rule-empty-line-before': 'never',
    // 类名校验规则：BEM 风格
    // 例如：.block, .block123, .block-modifier, .block--modifier, .block__element, .block__element--modifier
    'selector-class-pattern': ['^[a-z][a-z0-9]*(-{1,2}[a-z0-9]+)*(__[a-z0-9]+(-{1,2}[a-z0-9]+)*)?$']
  }
};
