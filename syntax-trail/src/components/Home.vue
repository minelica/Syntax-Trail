<template>
  <div class="language-page">
    <!-- Hero Section -->
    <header class="hero" role="banner">
      <h1>Syntax Trail</h1>
      <p class="hero-sub">Your Companion for Exploring Programming Languages</p>
    </header>

    <!-- Introduction Section -->
    <section class="introduction" aria-labelledby="intro-heading">
      <h2 id="intro-heading" class="visually-hidden">Introduction</h2>
      <p class="home-intro">
        Syntax Trail is your ultimate guide to learning and mastering various programming languages.
        Whether you are a beginner looking to start your coding journey or an experienced developer
        aiming to expand your skill set, we have got you covered. Explore our comprehensive
        tutorials, examples, and resources to enhance your programming knowledge and stay ahead in
        the tech world.
      </p>
    </section>

    <!-- Grid Section -->
    <section class="languages-grid" aria-labelledby="languages-heading">
      <h2 id="languages-heading">Explore Programming Languages</h2>

      <!-- role=list verbessert Ankündigung in Screenreadern -->
      <ul class="grid" role="list">
        <li v-for="language in languages" :key="language.name" class="grid-item" role="listitem">
          <!-- Ganze Karte ist ein Link: Tastatur & A11y ✔ -->
          <RouterLink
            class="card-link"
            :to="language.path"
            :aria-label="`Open ${language.name} page`"
          >
            <el-card class="language-card" shadow="hover">
              <div class="logo-wrap" :aria-hidden="true">
                <img
                  :src="language.logo"
                  :alt="`${language.name} logo`"
                  class="logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 class="language-name">{{ language.name }}</h3>
            </el-card>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// import { useRouter } from 'vue-router'

// const router = useRouter()

const languages = ref([
  { name: 'JavaScript', logo: '/assets/javascript.jpg', path: '/javascript' },
  { name: 'Python', logo: '/assets/python.jpg', path: '/python' },
  { name: 'Java', logo: '/assets/java.jpg', path: '/java' },
  { name: 'C++', logo: '/assets/cplusplus.jpg', path: '/cplusplus' },
  { name: 'C#', logo: '/assets/csharp.jpg', path: '/csharp' },
  { name: 'Ruby', logo: '/assets/ruby.jpg', path: '/ruby' },
  { name: 'PHP', logo: '/assets/php.jpg', path: '/php' },
  { name: 'Swift', logo: '/assets/swift.jpg', path: '/swift' },
  { name: 'Go', logo: '/assets/go.jpg', path: '/go' },
  { name: 'Rust', logo: '/assets/rust.jpg', path: '/rust' },
  { name: 'SQL', logo: '/assets/sql.jpg', path: '/sql' },
  { name: 'Kotlin', logo: '/assets/kotlin.jpg', path: '/kotlin' },
  { name: 'TypeScript', logo: '/assets/typescript.jpg', path: '/typescript' },
  { name: 'R', logo: '/assets/r.jpg', path: '/r' },
  { name: 'ShellScript', logo: '/assets/shell.jpg', path: '/shellscript' },
  { name: 'MATLAB', logo: '/assets/matlab.jpg', path: '/matlab' },
  { name: 'Dart', logo: '/assets/dart.jpg', path: '/dart' },
])
</script>

<style scoped>
/* ---------- Helpers ---------- */
.visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; border: 0; padding: 0; margin: -1px;
}

/* ---------- Layout ---------- */
.language-page {
  max-width: 1200px;
  margin: 0 auto;           /* zentriert den Inhalt */
  padding: 0 1rem;
}

.hero {
  text-align: center;
  padding: 2rem 0;
}

.hero h1 {
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
}

.hero-sub {
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  color: #a0aec0;
  text-align: center;
}

.languages-grid {
  margin-top: 2rem;
}

.languages-grid h2 {
  text-align: center;
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  margin-bottom: 1rem;
}

/* Grid: schön responsiv und Karten zentriert */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
  padding: 1rem 0 2rem;
  justify-items: center; /* Karten in Spalten zentrieren */
}

.grid-item {
  width: 100%;
}

/* ---------- Card ---------- */
.card-link {
  display: block;            /* macht Link flächig (ganze Karte) */
  text-decoration: none;
  color: inherit;
}

/* Deine Karte, jetzt a11y- & responsive-feinjustiert */
.language-card {
  display: flex;
  flex-direction: column;
  align-items: center;       /* horizontal zentriert */
  justify-content: center;   /* vertikal zentriert */
  background-color: #1a202c;
  color: #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform .2s ease, box-shadow .2s ease;
  min-height: 180px;         /* sorgt für konsistente Höhe */
}

/* Bildbereich mit Aspect-Ratio verhindert Layout-Jumps */
.logo-wrap {
  width: 100%;
  max-width: 140px;
  aspect-ratio: 1 / 1;      /* quadratischer Bereich */
  display: grid;
  place-items: center;       /* Bild in der Mitte */
  overflow: hidden;
  margin-bottom: .5rem;
}

.logo {
  width: 90%;
  height: 90%;
  /* object-fit: cover; */
  border-radius: 8px;
}

/* Kontrastreicher Text (vorher war #1a202c auf dunkel → zu wenig Kontrast) */
.language-name {
  font-family: 'Courier New', Courier, monospace;
  color: #1a202c;
  font-size: 1rem;
  margin-top: .25rem;
}

/* Hover & Focus (Fokus sichtbar für Tastatur) */
.language-card:hover {
  transform: translateY(-2px);
}

.card-link:focus-visible .language-card {
  outline: 3px solid #86bef9;
  outline-offset: 3px;
  box-shadow: 0 0 0 3px rgba(134, 190, 249, .35);
}

/* Reduced motion respektieren */
@media (prefers-reduced-motion: reduce) {
  .language-card { transition: none; }
  .language-card:hover { transform: none; }
}

/* Intro-Text */
.home-intro {
  padding: 20px 24px;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-size: 18px;
  max-width: 80ch;
  margin: 0 auto;
}

/* Kleines Tuning auf sehr schmalen Screens */
@media (max-width: 420px) {
  .logo-wrap { max-width: 120px; }
}
</style>
