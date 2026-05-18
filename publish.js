// 发布
import shell from 'shelljs';

// 出错时退出进程
shell.set('-e');

// 发布到 linter-configs 仓库
shell.exec('git add .');
shell.exec('git commit -m "update"');
shell.exec('git push');
console.log('✅ 已成功推送到 linter-configs 仓库');

// 发布到 yalc
shell.exec('yalc push');
console.log('✅ 已成功推送到 yalc');
