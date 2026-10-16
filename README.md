# FE Linter Configs

基于 ESLint、Stylelint、Prettier、Markdownlint 的前端代码规范配置集合

## 安装

在 `pnpm-workspace.yaml` 中添加配置，将 `linter-configs` 依赖提升到项目根目录。

```yaml
publicHoistPattern:
  - '*eslint*'
  - '*stylelint*'
  - prettier
  - markdownlint
  - globals
  - postcss
  - postcss-html
```

使用 `pnpm` 安装，所有依赖随 `linter-configs` 自动安装，无需在业务项目中重复声明。

```shell
# 从 GitHub 安装
pnpm install https://github.com/jianhee/linter-configs.git -D

# 或者下载后从本地安装
pnpm install file:../linter-configs -D
```

安装后会记录到 `package.json` 中，如果仅个人使用不想影响团队成员，可以将 `package.json` 中的记录删除，然后在 `.pnpmfile.cjs` 中添加配置动态安装。

```js
module.exports = {
  hooks: {
    readPackage(pkg) {
      pkg.devDependencies = pkg.devDependencies || {};
      pkg.devDependencies['linter-configs'] = 'file:../linter-configs';
      return pkg;
    }
  }
};
```

## 配置

### VS Code

把 `.vscode` 文件夹复制到项目根目录下

## EditorConfig

把 `.editorconfig` 文件复制到项目根目录下

## Prettier

在 `package.json` 中添加 `prettier` 字段

```json
{
  "prettier": "linter-configs/prettier"
}
```

或者在项目根目录创建 `prettier.config.js` 文件

```js
module.exports = require('linter-configs/prettier');
```

## ESLint

在项目根目录创建 `eslint.config.js` 文件

```js
// ES6 项目
const es6 = require('linter-configs/eslint/es6');
module.exports = [...es6];

// ES6 + HTML 项目
const html = require('linter-configs/eslint/html');
module.exports = [...html];

// ES6 + Vue2 项目
const vue2 = require('linter-configs/eslint/vue2');
module.exports = [...vue2];

// ES6 + Vue3 项目
const vue3 = require('linter-configs/eslint/vue3');
module.exports = [...vue3];
```

## StyleLint

在项目根目录创建 `stylelint.config.js` 文件

```js
// CSS 项目
module.exports = {
  extends: ['linter-configs/stylelint/css']
};

// SCSS 项目
module.exports = {
  extends: ['linter-configs/stylelint/scss']
};

// CSS + HTML/Vue 项目
module.exports = {
  extends: ['linter-configs/stylelint/html-css']
};

// SCSS + HTML/Vue 项目
module.exports = {
  extends: ['linter-configs/stylelint/html-scss']
};
```

## Markdownlint

在项目根目录创建 `.markdownlint.json` 文件

```json
{
  "extends": "linter-configs/markdownlint"
}
```
