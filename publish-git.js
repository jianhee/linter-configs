// 发布到 linter-configs 仓库
import shell from 'shelljs';

shell.set('-e');

// shell.exec('git add .');
shell.exec('git commit -m "update"');
shell.exec('git push');
console.log('✅ 已成功推送到 linter-configs 仓库');
