<!-- ESLint Vue3 规则测试文件 -->
<template>
  <div
    a="1"
    b="2"
    c="3"
    d="4"
  >
    <TodoItem1 :item="var1" />
    <TodoItem2 :item="var1" />

    <div />
    <div>{{ var2 }}</div>
    <div>{{ `count${var2}` }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { fn } from '@/api';

import TodoItem1 from './TodoItem1.vue';
import TodoItem2 from './TodoItem2.vue';

// 变量
const var1 = ref({ a: 1, b: 1 });
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
</script>

<style lang="scss">
a {
  margin: 0 auto;
  color: #fff;
}
b {
  font-size: 12px;
  color: rgb(0 0 0 / 50%);
}
.demo {
  font-size: 14px;
  color: #333;
}
</style>
