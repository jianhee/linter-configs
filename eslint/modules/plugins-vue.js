// Vue 插件
// 文档：https://eslint.vuejs.org/
// 1.解析 `.vue` 文件 `<script>` 与 `<template>` 中的代码
// 2.提供针对 Vue 语法的 `vue-eslint-parser` 解析器
// 3.提供针对 Vue 语法的的规则

const vue = require('eslint-plugin-vue');
const vueParser = require('vue-eslint-parser');

module.exports = [
  {
    // 仅对 .vue 文件应用 Vue 解析器和规则
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    // Vue 插件
    plugins: { vue },
    // Vue 规则
    rules: {
      // 组件的命名：必须使用两个以上的单词
      'vue/multi-word-component-names': 'off',
      // 组件名称的写法：在单文件组件和字符串模板中使用 PascalCase 写法，在 DOM 模板中使用 kebab-case 写法
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      // HTML 自闭合元素
      'vue/html-self-closing': ['error', { html: { void: 'always' } }],
      // HTML 元素中的内容是否换行：多行时换行，单行时关闭校验
      'vue/multiline-html-element-content-newline': 'error',
      'vue/singleline-html-element-content-newline': 'off',
      // 使用模板字面量而非字符串连接
      'vue/prefer-template': 'error',
      // 使用 === 而不是 ==
      'vue/eqeqeq': ['error', 'always']
    }
  }
];
