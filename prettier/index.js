// Prettier Config
// 文档：https://prettier.io/

module.exports = {
  // 关联 JSON Schema 定义，提供智能提示和验证
  $schema: 'https://json.schemastore.org/prettierrc',
  // 箭头函数的参数圆括号：只有一个参数时不使用括号
  arrowParens: 'avoid',
  // 是否将标签的反尖括号放在最后一行的末尾（否则需要换行）
  bracketSameLine: false,
  // 是否在大括号内首尾添加空格
  bracketSpacing: true,
  // 识别并格式化内嵌代码：自动
  embeddedLanguageFormatting: 'auto',
  // 换行方式
  endOfLine: 'lf',
  // HTML 的空格格式：可选的值有 1.'css'（根据显示样式）2.'strict'（保留空格）3.'ignore'（忽略空格）
  htmlWhitespaceSensitivity: 'css',
  // 是否在文件开头自动插入特殊注释 @prettier
  insertPragma: false,
  // 是否在 JSX 中使用单引号
  jsxSingleQuote: false,
  // 为指定的文件类型重写配置
  overrides: [
    // CSS：是否使用单引号
    { files: ['*.css', '*.scss', '*.less'], options: { singleQuote: false } },
    // Vue：是否给属性换行
    { files: '*.vue', options: { singleAttributePerLine: true } }
  ],
  // 每行最大字符数
  printWidth: 100,
  // Markdown 的折行标准：使用默认标准
  proseWrap: 'preserve',
  // 对象属性的引号：如果有一个属性需要使用引号，那就全部都使用引号
  quoteProps: 'consistent',
  rangeEnd: Infinity,
  // 文件格式化的范围：全部内容
  rangeStart: 0,
  // 是否在文件开头写特殊注释 @prettier
  requirePragma: false,
  // 是否在语句末尾使用分号
  semi: true,
  // 是否给属性换行
  singleAttributePerLine: false,
  // 是否使用单引号
  singleQuote: true,
  // 制表符宽度
  tabWidth: 2,
  // 对象和数组中的拖尾逗号：不使用
  trailingComma: 'none',
  // 是否使用制表符缩进（否则使用空格）
  useTabs: false,
  // Vue 的 <script> 和 <style> 标签是否缩进
  vueIndentScriptAndStyle: false
};
