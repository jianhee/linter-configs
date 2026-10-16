// ESLint 基础配置
// 文档：https://eslint.org/docs/v8.x/

module.exports = {
  // 是否是顶级目录
  // ESLint 会自动在文件目录中查找配置文件，从直系父目录开始，沿着目录结构依次向上，直到项目根目录或指定 `root: true` 时停止
  root: true,

  // 预定义的全局变量
  env: {
    // 是否启用浏览器全局变量
    browser: true,
    // 是否启用 Node.js 全局变量和作用域
    node: true,
    // 是否启用除 modules 以外的所有 ECMAScript 6 特性
    es6: true,
    // 是否启用 jQuery 全局变量
    jquery: true
  },

  // 自定义的全局变量
  // 添加的变量可以设置为以下三种值
  globals: {
    // var1: 'off',
    // var2: 'readonly',
    // var3: 'writable',
  },

  // 解析器
  // 默认为 'Espree'
  // 添加第三方解析器可以解析特定的语法，同时需要配置对应的解析器选项
  parser: 'Espree',

  // 解析器选项
  parserOptions: {
    // ECMAScript 版本
    // 默认为 '3,5'，可设置为一个版本或一个年份
    ecmaVersion: 'latest',
    // ECMAScript 模式
    // 默认为 'script'，可设置为 'module'
    sourceType: 'module',
    // 额外的语言特性
    ecmaFeatures: {
      // 是否允许全局范围内的 return 语句
      globalReturn: false,
      // 是否启用全局严格模式
      impliedStrict: true,
      // 是否启用 JSX 语法
      jsx: true
    }
  },

  // 可共享配置
  // 添加可共享配置可以继承另一个配置文件的所有特征（包括规则、插件和语言选项）并修改所有选项
  // 数组项可以设置为以下三种值，后一项的优先级大于前一项，后一项的规则会覆盖前一项
  extends: [
    'eslint:recommended' // 官方配置的名称：'recommended'（推荐规则）'all'（全部规则）
    // 'standard',       // 第三方配置的名称
    // './common.js'     // 本地配置文件的路径
  ],

  // 插件
  // 默认只能检测 `*.js` 文件中的代码
  // 添加第三方插件可以提供额外的环境、配置、规则、解析器等
  plugins: [
    // html
    // vue
    // ...
  ],

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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 换行风格：LF
    'linebreak-style': ['error', 'unix'],
    // 语句末尾的分号：必须使用
    'semi': ['error', 'always'],
    // 对象属性的引号：如果有一个属性需要使用引号，那就全部都使用引号
    'quote-props': ['error', 'consistent-as-needed'],
    // 箭头函数的参数圆括号：只有一个参数时不使用括号
    'arrow-parens': ['error', 'as-needed'],
    // 函数左括号之前的空格：匿名函数有空格，命名函数无空格，异步箭头函数有空格
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ]
  }
};
