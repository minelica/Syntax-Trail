<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

// Zustand für mobiles Menü
const isMenuOpen = ref(false)

// Menü ein-/ausklappen
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Menü auf Mobilgeräten schließen, z. B. bei Klick auf Link
function closeMenuIfMobile() {
  if (window.innerWidth < 768) {
    isMenuOpen.value = false
  }
}

// Referenz für gesamten Menübereich (für Outside-Click)
const menuRef = ref<HTMLElement | null>(null)

// Klick außerhalb des Menüs → Menü schließen
function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node
  if (isMenuOpen.value && menuRef.value && !menuRef.value.contains(target)) {
    isMenuOpen.value = false
  }
}

// ESC schließt Menü
function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})

// Dropdown-Inhalte (Languages)
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
  { name: 'Dart', route: '/dart' }
]
</script>

<template>
  <div class="menu-header relative" ref="menuRef">
    <!-- Logo und Titel -->
    <div class="flex-1 flex justify-between items-center">
      <RouterLink to="/" class="flex items-center" @click="closeMenuIfMobile">
        <img src="/src/assets/logo.jpg" class="w-14 h-14 rounded-lg" alt="Syntax Trail Logo" />
        <p class="ml-4 text-3xl font-extrabold">Syntax Trail</p>
      </RouterLink>
    </div>

    <!-- Hamburger Button -->
    <button @click="toggleMenu" class="md:hidden text-gray-200 focus:outline-none hover:text-gray-400 cursor-pointer"
      aria-label="Toggle menu" :aria-expanded="isMenuOpen" aria-controls="main-menu">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Navigation -->
    <nav id="main-menu" role="navigation"
      :class="[isMenuOpen ? 'block' : 'hidden', 'md:flex md:items-center w-full md:w-auto absolute md:relative top-full left-0 bg-[#1a202c] md:bg-transparent shadow-md md:shadow-none z-10']">
      <ul class="md:flex items-start text-lg font-bold space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
        <!-- Home -->
        <li class="pl-4 md:pl-0">
          <RouterLink to="/" @click="closeMenuIfMobile" class="block px-4 py-2 rounded hover:bg-[#242c3a]"
            active-class="text-blue-500">
            Home
          </RouterLink>
        </li>

        <!-- Hover-Dropdown: Languages -->
        <li class="relative group pl-4 md:pl-0">
          <button
            class="flex items-center w-full md:w-auto px-4 py-2 rounded hover:bg-[#242c3a] focus:outline-none text-left"
            aria-haspopup="true" aria-expanded="false" tabindex="0">
            Languages
            <svg class="ml-2 w-4 h-4 text-gray-300" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul class="hidden group-hover:block absolute bg-[#1a202c] shadow-lg rounded-lg mt-2 p-2 w-48 text-sm z-20">
            <li v-for="lang in languages" :key="lang.name" class="hover:bg-[#242c3a] rounded">
              <RouterLink :to="lang.route" @click="closeMenuIfMobile" class="block px-4 py-2"
                active-class="text-blue-500">
                {{ lang.name }}
              </RouterLink>
            </li>
          </ul>
        </li>

        <!-- About -->
        <li class="pl-4 md:pl-0">
          <RouterLink to="/about" @click="closeMenuIfMobile" class="block px-4 py-2 rounded hover:bg-[#242c3a]"
            active-class="text-blue-500">
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

li {
  list-style: none;
}

li:hover {
  background-color: #242c3a;
  border-radius: 8px;
}

.block.px-4.py-2:hover {
  background-color: #242c3a;
  border-radius: 8px;
}

button {
  background: none;
  border: none;
}

.w-14.h-14.rounded-lg {
  border-radius: 20px;
}

.w-14.h-14.rounded-lg {
  margin-left: 10px;
}

@media (min-width: 768px) {
  .group:hover>ul {
    display: block;
  }
}
</style>
