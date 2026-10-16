// 发布到 yalc
import shell from 'shelljs';

shell.set('-e');

shell.exec('yalc push');
console.log('✅ 已成功推送到 yalc');
