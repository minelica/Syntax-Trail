<script setup lang="ts">
import '@/assets/main.css'
const title = 'JavaScript'
const description =
  'A versatile programming language primarily used for web development.'

const toc = [
  //  { id: 1, title: 'Overview', link: '#overview' },
  { id: 1, title: 'Usage', link: '#usage' },
  { id: 2, title: 'History', link: '#history' },
  { id: 3, title: 'Syntax', link: '#syntax' },
  { id: 4, title: 'Language Elements', link: '#language-elements' },
  { id: 5, title: 'Code Examples', link: '#code-examples' },
  { id: 6, title: 'FAQ', link: '#faq' },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content:
      'JavaScript is the dominant client-side scripting language of the Web, with 99% of all websites using it for this purpose. Scripts are embedded in or included from HTML documents and interact with the DOM.',
  },
  {
    id: 'history',
    title: 'History',
    content:
      'JavaScript was developed by Brendan Eich in 1995. It has evolved from a simple scripting language to a powerful platform.',
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: `
     - Variables: let, const, var
     - Functions: function() {}
     - Classes: class MyClass {}
     - Modules: export/import`,
  },
  {
    id: 'language-elements',
    title: 'Language Elements',
    content: 'Loops, conditions, events, DOM manipulation.',
  },
]

const codeExamples = [
  { tab: 'Hello World', code: "console.log('Hello, World!');" },
  { tab: 'Variables', code: 'let x = 5; const y = 10;' },
  { tab: 'Functions', code: "function greet() { return 'Hello'; }" },
]

const faqs = [
  {
    id: 1,
    question: 'What is JavaScript?',
    answer: 'JavaScript is a programming language for the Web.',
  },
  {
    id: 2,
    question: 'Is JavaScript hard to learn?',
    answer: 'It is well-suited for beginners as it is simple and flexible.',
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

    <!-- Table of Contents -->
    <nav class="table-of-contents">
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Dynamic Sections -->
      <section v-for="section in sections" :key="section.id" :id="section.id">
        <h2>{{ section.title }}</h2>
        <p v-if="section.id !== 'syntax'">{{ section.content }}</p>
        <pre v-else><code>{{ section.content }}</code></pre>
      </section>

      <!-- Code Examples -->
      <section id="code-examples">
        <h2>Code Examples</h2>
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

<style scoped></style>
