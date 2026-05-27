// Vue 插件
// 文档：https://eslint.vuejs.org/
// 安装：yarn add eslint-plugin-vue
// 1.用于解析 .vue 文件的 <script> 和 <template> 标签中的代码
// 2.提供针对 Vue 语法的 `vue-eslint-parser` 解析器
// 3.提供针对 Vue 语法的的规则

module.exports = {
  // Vue 解析器
  // 如果在 `parser` 字段中使用了其它解析器，需要移入 `parserOptions` 字段中以避免两个解析器产生冲突
  parser: 'vue-eslint-parser',

  // Babel 解析器移入这里
  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  // Vue 插件
  // 它和 HTML 插件都会从 <script> 标签中提取代码，所以需要在 `plugins` 字段中移除 'html' 以避免两个插件产生冲突
  plugins: ['vue'],

  // Vue 推荐规则
  extends: [
    // 'plugin:vue/recommended',      // Vue2 使用
    // 'plugin:vue/vue3-recommended'  // Vue3 使用
  ],

  // Vue 规则
  rules: {
    // 目录和文件名：必须使用 kebab-case 写法
    // 组件的命名：必须使用两个以上的单词
    'vue/multi-word-component-names': 'off',
    // 组件名称的写法：在单文件组件和字符串模板中使用 PascalCase 写法，在 DOM 模板中使用 kebab-case 写法
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    // 使用 === 而不是 ==
    'vue/eqeqeq': ['error', 'always'],
    // 使用模板字面量而非字符串连接
    'vue/prefer-template': 'error',
    // HTML 元素中的内容是否换行：多行时换行，单行时关闭校验
    'vue/multiline-html-element-content-newline': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    // HTML 闭合元素
    'vue/html-self-closing': ['error', { html: { void: 'always' } }]
  }
};
