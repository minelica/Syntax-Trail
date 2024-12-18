<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0">
      <img style="width: 100px" alt="Logo" />
    </el-menu-item>
    <el-menu-item index="1">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Languages</template>
      <el-menu-item index="2-1">JavaScript</el-menu-item>
      <el-menu-item index="2-2">Python</el-menu-item>
      <el-menu-item index="2-3">Java</el-menu-item>
      <el-menu-item index="2-4">C++</el-menu-item>
      <el-menu-item index="2-5">C'</el-menu-item>
      <el-menu-item index="2-6">Ruby</el-menu-item>
      <el-menu-item index="2-7">PHP</el-menu-item>
      <el-menu-item index="2-8">Swift</el-menu-item>
      <el-menu-item index="2-9">Go</el-menu-item>
      <el-menu-item index="2-10">Rust</el-menu-item>
      <el-menu-item index="2-11">SQL</el-menu-item>
      <el-menu-item index="2-12">Kotlin</el-menu-item>
      <el-menu-item index="2-13">TypeScript</el-menu-item>
      <el-menu-item index="2-14">R</el-menu-item>
      <el-menu-item index="2-15">ShellScript</el-menu-item>
      <el-menu-item index="2-16">Matlab</el-menu-item>
      <el-menu-item index="2-17">Dart</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">About</el-menu-item>
  </el-menu>
</template>

<style>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
