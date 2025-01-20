<script setup lang="ts">
import Menu from './Menu.vue'
import '@/assets/main.css'
</script>

<template>
  <div id="layout">
    <header>
      <Menu />
    </header>
    <main>
      <router-view />
    </main>
    <el-backtop :right="50" :bottom="50" />
  </div>
</template>

<style scoped></style>
