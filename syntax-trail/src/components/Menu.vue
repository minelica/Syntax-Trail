<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img src="/src/assets/logo.jpg" style="width: 50px; border-radius: 20px" alt="Logo" />
      <p class="menu_title_st">Syntax Trail</p>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Languages</template>
      <el-menu-item index="2-1">
        <router-link to="/javascript">JavaScript</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/python">Python</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link to="/java">Java</router-link>
      </el-menu-item>
      <el-menu-item index="2-4">
        <router-link to="/cplusplus">C++</router-link>
      </el-menu-item>
      <el-menu-item index="2-5">
        <router-link to="/csharp">C#</router-link>
      </el-menu-item>
      <el-menu-item index="2-6">
        <router-link to="/ruby">Ruby</router-link>
      </el-menu-item>
      <el-menu-item index="2-7">
        <router-link to="/php">PHP</router-link>
      </el-menu-item>
      <el-menu-item index="2-8">
        <router-link to="/swift">Swift</router-link>
      </el-menu-item>
      <el-menu-item index="2-9">
        <router-link to="/go">Go</router-link>
      </el-menu-item>
      <el-menu-item index="2-10">
        <router-link to="/rust">Rust</router-link>
      </el-menu-item>
      <el-menu-item index="2-11">
        <router-link to="/sql">SQL</router-link>
      </el-menu-item>
      <el-menu-item index="2-12">
        <router-link to="/kotlin">Kotlin</router-link>
      </el-menu-item>
      <el-menu-item index="2-13">
        <router-link to="/typescript">TypeScript</router-link>
      </el-menu-item>
      <el-menu-item index="2-14">
        <router-link to="/r">R</router-link>
      </el-menu-item>
      <el-menu-item index="2-15">
        <router-link to="/shellscript">ShellScript</router-link>
      </el-menu-item>
      <el-menu-item index="2-16">
        <router-link to="/matlab">Matlab</router-link>
      </el-menu-item>
      <el-menu-item index="2-17">
        <router-link to="/dart">Dart</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <router-link to="/about">About</router-link>
    </el-menu-item>
  </el-menu>
</template>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu {
  background-color: #cbd5e0 !important;
}

.el-menu--horizontal.el-menu {
  border-bottom: none !important;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #cbd5e0 !important;
  color: var(--el-menu-active-color) !important; /* edit */
  border-radius: 8px !important;
}

.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  font-weight: bold;
  border-radius: 8px !important;
}

a:-webkit-any-link {
  text-decoration: none !important;
}

.el-sub-menu__title {
  font-weight: bold;
}

.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: 2px solid #2d4834 !important;
}

.el-sub-menu:hover {
  background-color: #cbd5e0 !important;
}

.el-sub-menu.is-opened {
  background-color: #cbd5e0 !important;
}

.menu_title_st {
  font-weight: bolder;
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  margin-left: 30px;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #fff,
    0 0 20px #49ff18,
    0 0 30px #49ff18,
    0 0 40px #49ff18,
    0 0 55px #49ff18,
    0 0 75px #49ff18,
    2px 2px 2px rgba(206, 89, 55, 0);
}
</style>
