<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/assets/main.css'
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <Analytics />
  <div id="app" class="p-4 md:p-8 lg:p-12">
    <RouterView />
  </div>
</template>

<style></style>
