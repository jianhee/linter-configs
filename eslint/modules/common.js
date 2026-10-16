// ESLint 基础配置
// 文档：https://eslint.org/docs/latest/use/configure/configuration-files

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    // eslint:recommended 仅应用于 JS/Vue/HTML 文件，避免在 JSON/YAML 上崩溃
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.jsx', '**/*.vue', '**/*.html']
  },
  {
    // 语言选项
    languageOptions: {
      // ECMAScript 版本
      // 默认为 'latest'，可设置为一个版本或一个年份
      ecmaVersion: 'latest',
      // ECMAScript 模式
      // 默认为 'script'，可设置为 'module|commonjs'
      sourceType: 'module',
      // 全局变量
      globals: {
        // 预定义的全局变量
        // flat config 中使用 globals 包替代 env 字段
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
        ...globals.jquery
        // 自定义的全局变量
        // 添加的变量可以设置为以下三种值
        // var1: 'off',
        // var2: 'readonly',
        // var3: 'writable',
      },
      // 解析器
      // 默认为 Espree
      // 添加第三方解析器可以解析特定的语法，同时需要配置对应的解析器选项
      // parser: js.parser,
      // 解析器选项
      parserOptions: {
        // 额外的语言特性
        ecmaFeatures: {
          // 是否允许全局范围内的 return 语句
          globalReturn: false,
          // 是否启用全局严格模式
          impliedStrict: true,
          // 是否启用 JSX 语法
          jsx: true
        }
      }
    },

    // 规则集
    // 添加的规则可以设置为以下三种值
    // 0/'off'    关闭规则
    // 1/'warn'   启用并警告，不会导致程序退出
    // 2/'error'  启用并报错，触发时会导致程序退出
    rules: {
      // 使用模板字面量而非字符串连接
      'prefer-template': 'error',
      // 使用箭头函数作为回调
      'prefer-arrow-callback': 'error',
      // 生产环境禁用 console/debugger
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
];
