// ESLint ES6 规则测试文件
import { ref } from 'vue';

import { fn } from '@/api';

import { a } from './a.js';
import { b } from './b.js';

// 变量
const var1 = ref({ a, b });
const var2 = ref(`value is ${var1.value.a}`);
const var3 = ref(0);

// 方法
fn();
const fn1 = () => var2.value;
const fn2 = a => a * 2;
const fn3 = (a, b) => a == b;
const fn4 = function (a, b) {
  return a != b;
};
function fn5(a, b) {
  return a + b;
}

// 回调
[1, 2, 3].map(n => n * 2);

// console
console.log(1);
