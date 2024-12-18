<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
body {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #007bff !important;
  color: #ffffff;
  padding: 1rem !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  border-radius: 8px;
}

.el-menu {
  border-radius: 6px;
}

main {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

footer {
  background-color: #0056b3;
  color: #ffffff;
  padding: 1rem;
  text-align: center;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

nav a.router-link-active {
  font-weight: bold;
  background-color: #0056b3;
}
</style>
