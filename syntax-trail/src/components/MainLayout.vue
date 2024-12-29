<script setup lang="ts">
import Menu from "./Menu.vue";
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
  </div>
</template>

<style scoped></style>
