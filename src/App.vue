<template>
  <ColumnList :list="data" />
</template>

<script setup lang="ts">
import ColumnList, { ColumnsProps } from '@/components/ColumnList.vue';
import { reactive } from 'vue';
const data: Array<ColumnsProps> = reactive([
  {
    id: 10,
    img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
    title: '123',
    desc: 'daf'
  },
  {
    id: 11,
    img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
    title: '1234566',
    desc: 'daf'
  },
  {
    id: 12,
    img: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png',
    title: '1234566',
    desc: 'daf'
  }
])
</script>

<style scoped>
</style>