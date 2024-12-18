<script setup lang="ts">
import Menu from "./Menu.vue";
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

<style scoped>
#layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

main {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>
