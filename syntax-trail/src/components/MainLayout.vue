<script setup lang="ts">
import Menu from './Menu.vue';
import Footer from '@/views/Footer.vue';
import '@/assets/main.css';
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
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
footer {
  width: 100%;
}
</style>
