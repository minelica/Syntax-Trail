<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0">
      <router-link to="/" class="full-link">
        <img src="/src/assets/logo.jpg" style="width: 55px; border-radius: 20px" alt="Logo" />
        <p class="menu_title_st">Syntax Trail</p>
      </router-link>
    </el-menu-item>
    <el-menu-item index="1">
      <router-link to="/" class="full-link">Home</router-link>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Languages</template>
      <el-menu-item index="2-1">
        <router-link to="/javascript" class="full-link">JavaScript</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link to="/python" class="full-link">Python</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link to="/java" class="full-link">Java</router-link>
      </el-menu-item>
      <el-menu-item index="2-4">
        <router-link to="/cplusplus" class="full-link">C++</router-link>
      </el-menu-item>
      <el-menu-item index="2-5">
        <router-link to="/csharp" class="full-link">C#</router-link>
      </el-menu-item>
      <el-menu-item index="2-6">
        <router-link to="/ruby" class="full-link">Ruby</router-link>
      </el-menu-item>
      <el-menu-item index="2-7">
        <router-link to="/php" class="full-link">PHP</router-link>
      </el-menu-item>
      <el-menu-item index="2-8">
        <router-link to="/swift" class="full-link">Swift</router-link>
      </el-menu-item>
      <el-menu-item index="2-9">
        <router-link to="/go" class="full-link">Go</router-link>
      </el-menu-item>
      <el-menu-item index="2-10">
        <router-link to="/rust" class="full-link">Rust</router-link>
      </el-menu-item>
      <el-menu-item index="2-11">
        <router-link to="/sql" class="full-link">SQL</router-link>
      </el-menu-item>
      <el-menu-item index="2-12">
        <router-link to="/kotlin" class="full-link">Kotlin</router-link>
      </el-menu-item>
      <el-menu-item index="2-13">
        <router-link to="/typescript" class="full-link">TypeScript</router-link>
      </el-menu-item>
      <el-menu-item index="2-14">
        <router-link to="/r" class="full-link">R</router-link>
      </el-menu-item>
      <el-menu-item index="2-15">
        <router-link to="/shellscript" class="full-link">ShellScript</router-link>
      </el-menu-item>
      <el-menu-item index="2-16">
        <router-link to="/matlab" class="full-link">Matlab</router-link>
      </el-menu-item>
      <el-menu-item index="2-17">
        <router-link to="/dart" class="full-link">Dart</router-link>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <router-link to="/about" class="full-link">About</router-link>
    </el-menu-item>
  </el-menu>
</template>

<style>
.full-link {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu {
  background-color: #1a202c !important;
}

.el-menu--horizontal.el-menu {
  border-bottom: none !important;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 2px solid #cbd5e0 !important;
  border-radius: 8px !important;
}

.el-menu--horizontal>.el-menu-item a,
.el-menu--horizontal>.el-menu-item a:hover {
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px !important;
}

a:-webkit-any-link {
  text-decoration: none !important;
}

.el-sub-menu__title {
  font-size: 20px !important;
  font-weight: bold;
  color: #cbd5e0 !important;
  background-color: transparent !important;
  border-radius: 8px !important;
}

.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: 2px solid #cbd5e0 !important;
}

.el-sub-menu:hover {
  background-color: #242c3a !important;
  border-radius: 8px !important;
}

.el-sub-menu.is-opened {
  background-color: #242c3a !important;
}

.el-menu-item:hover {
  background-color: #242c3a !important;
  border-radius: 8px !important;
}

.el-menu-item.is-opened {
  background-color: #242c3a !important;
}

.menu_title_st {
  font-weight: bolder;
  font-size: 45px;
  font-family: 'Courier New', Courier, monospace;
  margin-left: 30px;
  /*text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #fff,
    0 0 20px #1a202c,
    0 0 30px #1a202c,
    0 0 40px #1a202c,
    0 0 55px #1a202c,
    0 0 75px #1a202c,
    2px 2px 2px rgba(206, 89, 55, 0);*/
  color: #fafafa;
}

.menu_title_st:hover {
  color: #fafafa !important;
}

li.el-menu-item {
  border-radius: 8px !important;
  background: transparent !important;
}

.el-menu-item a {
  color: #cbd5e0 !important;
  font-weight: bold;
  background-color: transparent !important;
}

.el-id-8430-0 {
  color: #cbd5e0 !important;
}

.li.el-sub-menu.is-active {
  background-color: transparent !important;
}
</style>
