<template>
  <div>1</div>
</template>
<script setup lang="ts">
  console.log('1');

  const abc = 1;
  console.log('abc', abc);
  console.log(abc);
  const currColor = 'red';
  const BGCOLOR = 'red';
</script>

<style scoped lang="scss">
  div {
    width: 100px;
    height: 100px;
    color: v-bind(currcolor);
    background-color: v-bind(bgcolor);
  }
</style>
