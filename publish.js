// 发布
import shell from 'shelljs';

// 出错时退出进程
shell.set('-e');

// 更新版本号
// shell.exec('npm version patch --no-git-tag-version'); // 小修复：1.0.0 → 1.0.1
// shell.exec('npm version minor --no-git-tag-version'); // 新功能：1.0.0 → 1.1.0
// shell.exec('npm version major --no-git-tag-version'); // 破坏性更新：1.0.0 → 2.0.0

// Git 提交 + 推送
shell.exec('git add .');
shell.exec('git commit -m "update"');
shell.exec('git push');
console.log('✅ 已成功推送到 linter-configs 仓库');

// npm 发布
// shell.exec('nrm use npm');
// shell.exec('npm login');
// shell.exec('npm publish --access public');
// shell.exec('nrm use taobao');
// console.log('✅ 已成功推送到 npm');

// yalc 发布
shell.exec('yalc push');
console.log('✅ 已成功推送到 yalc');
