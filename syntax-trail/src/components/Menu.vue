<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Menü nur auf Mobilgeräten schließen
function closeMenuIfMobile() {
  if (window.innerWidth < 768) {
    isMenuOpen.value = false
  }
}

defineExpose({ toggleMenu })

const languages = [
  { name: 'JavaScript', route: '/javascript' },
  { name: 'Python', route: '/python' },
  { name: 'Java', route: '/java' },
  { name: 'C++', route: '/cplusplus' },
  { name: 'C#', route: '/csharp' },
  { name: 'Ruby', route: '/ruby' },
  { name: 'PHP', route: '/php' },
  { name: 'Swift', route: '/swift' },
  { name: 'Go', route: '/go' },
  { name: 'Rust', route: '/rust' },
  { name: 'SQL', route: '/sql' },
  { name: 'Kotlin', route: '/kotlin' },
  { name: 'TypeScript', route: '/typescript' },
  { name: 'R', route: '/r' },
  { name: 'ShellScript', route: '/shellscript' },
  { name: 'Matlab', route: '/matlab' },
  { name: 'Dart', route: '/dart' },
]
</script>

<template>
  <div class="menu-header relative">
    <!-- Logo und Titel -->
    <div class="flex-1 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center" @click="closeMenuIfMobile">
        <img src="/src/assets/logo.jpg" class="w-14 h-14 rounded-lg" alt="Logo" />
        <p class="ml-4 text-3xl font-extrabold">Syntax Trail</p>
      </RouterLink>
    </div>

    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="md:hidden text-gray-200 focus:outline-none hover:text-gray-400 cursor-pointer"
    >
      <svg
        class="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Navigationsmenü -->
    <nav
      :class="[
        isMenuOpen ? 'block' : 'hidden',
        'md:flex md:items-center w-full md:w-auto absolute md:relative top-full left-0 bg-[#1a202c] md:bg-transparent shadow-md md:shadow-none z-10',
      ]"
    >
      <ul
        class="md:flex items-center text-lg font-bold space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0"
      >
        <li>
          <RouterLink
            to="/"
            @click="closeMenuIfMobile"
            class="block md:inline-block px-4 py-2 rounded hover:bg-[#242c3a]"
            active-class="text-blue-500"
          >
            Home
          </RouterLink>
        </li>

        <li class="relative group">
          <button
            class="block md:inline-block px-4 py-2 rounded hover:bg-[#242c3a] focus:outline-none"
          >
            Languages
          </button>
          <!-- Dropdown-Menü -->
          <ul
            class="hidden group-hover:block absolute bg-[#1a202c] shadow-lg rounded-lg mt-2 p-2 w-48 text-sm z-20"
          >
            <li v-for="lang in languages" :key="lang.name" class="hover:bg-[#242c3a] rounded">
              <RouterLink
                :to="lang.route"
                @click="closeMenuIfMobile"
                class="block px-4 py-2"
                active-class="text-blue-500"
              >
                {{ lang.name }}
              </RouterLink>
            </li>
          </ul>
        </li>

        <li>
          <RouterLink
            to="/about"
            @click="closeMenuIfMobile"
            class="block md:inline-block px-4 py-2 rounded hover:bg-[#242c3a]"
            active-class="text-blue-500"
          >
            About
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.menu-header {
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav,
header,
ul {
  box-shadow: none;
  border: none;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}

.w-14.h-14.rounded-lg {
  border-radius: 20px;
}

.relative.group {
  padding-right: 15px;
}

.relative.group:hover {
  cursor: pointer;
  background-color: #242c3a !important;
  border-radius: 8px;
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>
