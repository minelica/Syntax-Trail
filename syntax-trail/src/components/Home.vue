<template>
  <div class="language-page">
    <!-- Hero Section -->
    <header class="hero">
      <h1>Syntax Trail</h1>
      <p>Your Companion for Exploring Programming Languages</p>
      <!--  <p><img src="/src/assets/logoST.jpg" style="width: 400px; border-radius: 20px; margin-top: 20px" alt="Logo"/></p> -->
    </header>

    <!-- Introduction Section -->
    <section class="introduction">
      <p class="home-intro">
        Syntax Trail is your ultimate guide to learning and mastering various programming languages.
        Whether you are a beginner looking to start your coding journey or an experienced developer
        aiming to expand your skill set, we have got you covered. Explore our comprehensive
        tutorials, examples, and resources to enhance your programming knowledge and stay ahead in
        the tech world.
      </p>
    </section>

    <!-- Grid Section -->
    <section class="languages-grid">
      <h2>Explore Programming Languages</h2>
      <div class="grid">
        <el-card v-for="language in languages" :key="language.name" class="language-card"
          @click="navigateToLanguage(language.path)">
          <img :src="language.logo" :alt="language.name" class="logo" />
          <h3>{{ language.name }}</h3>
        </el-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const languages = ref([
  { name: 'JavaScript', logo: '/src/assets/logos/javascript.png', path: '/javascript' },
  { name: 'Python', logo: '/src/assets/logos/python.png', path: '/python' },
  { name: 'Java', logo: '/src/assets/logos/java.png', path: '/java' },
  { name: 'C++', logo: '/src/assets/logos/cplusplus.png', path: '/cplusplus' },
  { name: 'C#', logo: '/src/assets/logos/csharp.png', path: '/csharp' },
  { name: 'Ruby', logo: '/src/assets/logos/ruby.png', path: '/ruby' },
  { name: 'PHP', logo: '/src/assets/logos/php.png', path: '/php' },
  { name: 'Swift', logo: '/src/assets/logos/swift.png', path: '/swift' },
  { name: 'Go', logo: '/src/assets/logos/go.png', path: '/go' },
  { name: 'Rust', logo: '/src/assets/logos/rust.png', path: '/rust' },
  { name: 'SQL', logo: '/src/assets/logos/sql.png', path: '/sql' },
  { name: 'Kotlin', logo: '/src/assets/logos/kotlin.png', path: '/kotlin' },
  { name: 'TypeScript', logo: '/src/assets/logos/typescript.png', path: '/typescript' },
  { name: 'R', logo: '/src/assets/logos/r.png', path: '/r' },
  { name: 'ShellScript', logo: '/src/assets/logos/shell.png', path: '/shellscript' },
  { name: 'MATLAB', logo: '/src/assets/logos/matlab.png', path: '/matlab' },
  { name: 'Dart', logo: '/src/assets/logos/dart.png', path: '/dart' },
])

const navigateToLanguage = (path: string) => {
  router.push(path)
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 2rem 0;
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
}

.hero p {
  font-size: 1.5rem;
  color: #a0aec0;
}

.languages-grid {
  margin-top: 2rem;
}

.languages-grid h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.language-card {
  text-align: center;
  background-color: #1a202c;
  color: #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;
}

.language-card:hover {
  transform: scale(1.05);
}

.logo {
  width: 100px;
  height: 100px;
}

.home-intro {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  font-family: 'Courier New', Courier, monospace;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #fff,
    0 0 20px #1a202c,
    0 0 30px #1a202c,
    0 0 40px #1a202c,
    0 0 55px #1a202c,
    0 0 75px #1a202c,
    2px 2px 2px rgba(206, 89, 55, 0);
  text-align: center;
  font-size: 18px;
}

h3 {
  font-family: 'Courier New', Courier, monospace;
  color: #1a202c;
  margin-top: 10px;
}
</style>
