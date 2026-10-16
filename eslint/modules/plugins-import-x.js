// Import 规范插件
// 文档：https://github.com/un-ts/eslint-plugin-import-x
// 说明：eslint-plugin-import 的 flat-config 友好分支，提供 import 排序、分组等规则。

const importX = require('eslint-plugin-import-x');

module.exports = [
  {
    plugins: { 'import-x': importX },
    rules: {
      // 优先使用 export 而非 module.exports（不适用于 CJS 配置文件）
      'import-x/no-commonjs': 'off',
      // 禁止重复 import
      'import-x/no-duplicates': 'error',
      // import 后必须有空行
      'import-x/newline-after-import': ['error', { count: 1 }],
      // import 排序：按分组排序，组内按字母序
      'import-x/order': [
        'error',
        {
          // 分组顺序
          'groups': [
            'builtin', // Node 内置模块
            'external', // 第三方包
            'internal', // 项目别名模块(@/**)
            'parent', // 父级目录(../)
            'sibling', // 同级目录(./)
            'index', // index 文件
            'object', // object 导入
            'type' // 类型导入
          ],
          // 组内排序：字母升序(asc)，忽略大小写（如 axios 与 Vue 按 a < v 排序）
          'alphabetize': { caseInsensitive: true, order: 'asc' },
          // 分组之间必须有一个空行
          'newlines-between': 'always',
          // 路径分组微调
          'pathGroups': [
            // `@/**`（webpack/vite 别名）归入 internal 组
            { group: 'internal', pattern: '@/**' },
            // `vue` 固定在 external 组最前面
            { group: 'external', pattern: 'vue', position: 'before' }
          ],
          // pathGroups 里命中的 `vue` 不再按默认 external 类型参与组内字母序，避免排序冲突
          'pathGroupsExcludedImportTypes': ['vue']
        }
      ]
    }
  }
];
