<script setup lang="ts">
const title = 'JavaScript'
const description =
  'Eine vielseitige Programmiersprache, die vor allem für Webentwicklung verwendet wird.'

const toc = [
  { id: 1, title: 'Überblick', link: '#overview' },
  { id: 2, title: 'Verwendung', link: '#usage' },
  { id: 3, title: 'Entwicklungsgeschichte', link: '#history' },
  { id: 4, title: 'Syntax', link: '#syntax' },
  { id: 5, title: 'Sprachelemente', link: '#language-elements' },
  { id: 6, title: 'Code-Beispiele', link: '#code-examples' },
  { id: 7, title: 'FAQ', link: '#faq' },
]

const sections = [
  {
    id: 'overview',
    title: 'Überblick',
    content:
      'JavaScript ist eine der meistgenutzten Programmiersprachen für Webanwendungen. Sie wird sowohl client- als auch serverseitig eingesetzt.',
  },
  {
    id: 'usage',
    title: 'Verwendung',
    content:
      'JavaScript wird für dynamische Webinhalte, interaktive Benutzeroberflächen und serverseitige Logik verwendet. Es ist eine zentrale Technologie des Webs.',
  },
  {
    id: 'history',
    title: 'Entwicklungsgeschichte',
    content:
      'JavaScript wurde 1995 von Brendan Eich entwickelt. Es hat sich von einer einfachen Scriptsprache zu einer leistungsstarken Plattform entwickelt.',
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: `
     - Variablen: let, const, var
     - Funktionen: function() {}
     - Klassen: class MyClass {}
     - Module: export/import`,
  },
  {
    id: 'language-elements',
    title: 'Sprachelemente',
    content: 'Schleifen, Bedingungen, Events, DOM-Manipulation.',
  },
]

const codeExamples = [
  { tab: 'Hello World', code: "console.log('Hello, World!');" },
  { tab: 'Variablen', code: 'let x = 5; const y = 10;' },
  { tab: 'Funktionen', code: "function greet() { return 'Hello'; }" },
]

const faqs = [
  {
    id: 1,
    question: 'Was ist JavaScript?',
    answer: 'JavaScript ist eine Programmiersprache für das Web.',
  },
  {
    id: 2,
    question: 'Ist JavaScript schwer zu lernen?',
    answer: 'Für Anfänger ist es gut geeignet, da es einfach und flexibel ist.',
  },
]
</script>

<template>
  <div class="language-page">
    <!-- Header -->
    <header class="hero">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </header>

    <!-- Inhaltsverzeichnis -->
    <nav class="table-of-contents">
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>

    <!-- Hauptinhalt -->
    <main>
      <!-- Dynamische Sektionen -->
      <section v-for="section in sections" :key="section.id" :id="section.id">
        <h2>{{ section.title }}</h2>
        <p v-if="section.id !== 'syntax'">{{ section.content }}</p>
        <pre v-else><code>{{ section.content }}</code></pre>
      </section>

      <!-- Code-Beispiele -->
      <section id="code-examples">
        <h2>Code-Beispiele</h2>
        <el-tabs>
          <el-tab-pane v-for="example in codeExamples" :key="example.tab" :label="example.tab">
            <pre><code>{{ example.code }}</code></pre>
          </el-tab-pane>
        </el-tabs>
      </section>

      <!-- FAQ -->
      <section id="faq">
        <h2>FAQ</h2>
        <el-collapse>
          <el-collapse-item v-for="faq in faqs" :key="faq.id" :title="faq.question">
            {{ faq.answer }}
          </el-collapse-item>
        </el-collapse>
      </section>
    </main>
  </div>
</template>

<style scoped>
.language-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 20px;
}

.table-of-contents ul {
  list-style: none;
  padding: 0;
}

.table-of-contents li {
  margin: 5px 0;
}

section {
  margin-bottom: 40px;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
