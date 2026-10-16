// Standard 可共享配置
// 文档：https://www.npmjs.com/package/eslint-config-standard
// 说明：Standard 代码风格的配置

const { FlatCompat } = require('@eslint/eslintrc');

// 使用 @eslint/eslintrc 的 FlatCompat 将 eslintrc 格式转换为 flat config
const compat = new FlatCompat({
  baseDirectory: __dirname
});

// 限定 standard 规则仅应用于 JS/Vue/HTML 文件，避免在 JSON/YAML 上崩溃
const JS_FILES = ['**/*.js', '**/*.jsx', '**/*.vue', '**/*.html'];

module.exports = compat.extends('standard').map(config => ({
  ...config,
  files: config.files || JS_FILES
}));
