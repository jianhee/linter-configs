# FE Linter Configs

## 当前仓库

```shell
# 安装依赖
npm install
npm install yalc -g

# 发布
npm run pub
```

## 项目仓库

### 安装

```shell
# 从 GitHub 安装
npm install https://github.com/jianhee/linter-configs.git -D
# 从 yalc 安装
yalc add linter-configs -D
```

### 配置 VS Code

把 `.vscode` 文件夹复制到项目根目录下

### 配置 EditorConfig

把 `.editorconfig` 文件复制到项目根目录下

### 配置 Prettier

在配置文件中，比如 `.prettierrc`, `.prettierrc.json`, `.prettierrc.js`, `prettier.config.js`

```js
module.exports = require('linter-configs/prettier');
```

在 `package.json` 中

```json
{
  "prettier": "linter-configs/prettier"
}
```

### 配置 ESlint

在配置文件中，比如 `.eslintrc.js`, `.eslintrc.json`

```js
module.exports = {
  extends: ['./node_moules/linter-configs/eslint/es6|html|vue2|vue3']
};
```

在 `package.json` 中

```json
{
  "eslintConfig": {
    "extends": ["./node_moules/linter-configs/eslint/es6|html|vue2|vue3"]
  }
}
```

### 配置 StyleLint

在配置文件中，比如 `stylelint.config.js`, `.stylelintrc.js`, `.stylelintrc.json`

```js
module.exports = {
  extends: ['linter-configs/stylelint/css|scss|html-css|html-scss']
};
```

在 `package.json` 中

```json
{
  "stylelint": {
    "extends": ["linter-configs/stylelint/css|scss|html-css|html-scss"]
  }
}
```
