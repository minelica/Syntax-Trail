<!-- filepath: /c:/Users/masinovic/syntax-trail/syntax-trail/src/components/languages/Sql.vue -->
<script setup lang="ts">
import '@/assets/main.css'

const title = 'SQL'
const description = [
  'SQL (Structured Query Language) is a standard programming language specifically designed for managing and manipulating relational databases. It was first developed in the 1970s by IBM.',
  'SQL is used to perform various operations on data stored in a relational database, such as querying, updating, inserting, and deleting data. It is also used to create and modify database structures like tables and indexes.',
  'SQL is widely used in various applications, from small-scale desktop applications to large-scale enterprise systems and web applications.'
]

const toc = [
  { id: 1, title: '- Usage', link: '#usage' },
  { id: 2, title: '- History', link: '#history' },
  { id: 3, title: '- Syntax', link: '#syntax' },
  { id: 4, title: '- Language Elements', link: '#language-elements' },
  { id: 5, title: '- Code Examples', link: '#code-examples' },
  { id: 6, title: '- FAQ', link: '#faq' },
]

const syntaxContent = [
  {
    title: 'Queries',
    description: 'SQL queries are used to retrieve data from a database.',
    content: `
      SELECT * FROM users WHERE age > 30;
    `
  },
  {
    title: 'Inserts',
    description: 'SQL inserts are used to add new data to a database.',
    content: `
      INSERT INTO users (name, age) VALUES ('John Doe', 30);
    `
  },
  {
    title: 'Updates',
    description: 'SQL updates are used to modify existing data in a database.',
    content: `
      UPDATE users SET age = 31 WHERE name = 'John Doe';
    `
  },
  {
    title: 'Deletes',
    description: 'SQL deletes are used to remove data from a database.',
    content: `
      DELETE FROM users WHERE name = 'John Doe';
    `
  }
]

const languageElementsContent = [
  {
    title: 'Joins',
    description: 'Joins are used to combine rows from two or more tables based on a related column.',
    content: `
      SELECT users.name, orders.amount
      FROM users
      JOIN orders ON users.id = orders.user_id;
    `
  },
  {
    title: 'Subqueries',
    description: 'Subqueries are nested queries used to perform operations on the results of another query.',
    content: `
      SELECT name
      FROM users
      WHERE age > (SELECT AVG(age) FROM users);
    `
  },
  {
    title: 'Indexes',
    description: 'Indexes are used to speed up the retrieval of data from a database.',
    content: `
      CREATE INDEX idx_users_age ON users(age);
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      SQL is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Querying and retrieving data from a database (Data Retrieval).',
      'Inserting, updating, and deleting data in a database (Data Manipulation).',
      'Creating and modifying database structures, such as tables and indexes (Database Administration).',
      'Performing complex data analysis and reporting (Data Analysis).',
      'Interacting with databases in web and desktop applications (Application Development).'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      SQL was developed in the 1970s by IBM researchers Raymond Boyce and Donald Chamberlin. It was initially called SEQUEL (Structured English Query Language) and was designed to manipulate and retrieve data stored in IBM's original relational database management system, System R.

      In 1986, SQL became a standard of the American National Standards Institute (ANSI), and in 1987, it became a standard of the International Organization for Standardization (ISO).

      Since then, SQL has become the standard language for relational database management systems, and it is supported by many popular database systems, including MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.
    `,
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: syntaxContent,
  }
]

const codeExamples = [
  {
    tab: 'Simple Query',
    code: `
      SELECT name, age FROM users WHERE age > 30;
    `
  },
  {
    tab: 'Join Query',
    code: `
      SELECT users.name, orders.amount
      FROM users
      JOIN orders ON users.id = orders.user_id;
    `
  },
  {
    tab: 'Subquery',
    code: `
      SELECT name
      FROM users
      WHERE age > (SELECT AVG(age) FROM users);
    `
  },
  {
    tab: 'Insert Data',
    code: `
      INSERT INTO users (name, age) VALUES ('John Doe', 30);
    `
  },
  {
    tab: 'Update Data',
    code: `
      UPDATE users SET age = 31 WHERE name = 'John Doe';
    `
  },
  {
    tab: 'Delete Data',
    code: `
      DELETE FROM users WHERE name = 'John Doe';
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is SQL?',
    answer: 'SQL (Structured Query Language) is a standard programming language specifically designed for managing and manipulating relational databases.',
  },
  {
    id: 2,
    question: 'Is SQL hard to learn?',
    answer: 'SQL is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of SQL?',
    answer: 'SQL is used for data retrieval, data manipulation, database administration, data analysis, and application development.',
  },
  {
    id: 4,
    question: 'What are some popular SQL databases?',
    answer: 'Popular SQL databases include MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.',
  },
  {
    id: 5,
    question: 'What is the difference between SQL and NoSQL?',
    answer: 'SQL is used for relational databases with structured data, while NoSQL is used for non-relational databases with unstructured or semi-structured data.',
  },
]

</script>

<template>
  <div class="language-page">
    <!-- Header -->
    <header class="hero">
      <h1>{{ title }}</h1>
      <div>
        <p v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>
      </div>
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
        <div v-else>
          <el-card v-for="(item, index) in syntaxContent" :key="index">
            <p class="cardTitle">{{ item.title }}</p>
            <br>
            <p>{{ item.description }}</p>
            <br>
            <pre><code v-html="item.content"></code></pre>
          </el-card>
        </div>
        <div v-if="section.bulletPoints">
          <!-- <br> -->
          <ul>
            <li v-for="(point, index) in section.bulletPoints" :key="index">{{ point }}</li>
          </ul>
        </div>
      </section>

      <!-- Language Elements -->
      <section id="language-elements">
        <h2>Language Elements</h2>
        <el-card v-for="(element, index) in languageElementsContent" :key="index">
          <p class="cardTitle">{{ element.title }}</p>
          <br>
          <p>{{ element.description }}</p>
          <br>
          <pre><code v-html="element.content"></code></pre>
        </el-card>
      </section>

      <!-- Code Examples -->
      <section id="code-examples">
        <h2>Code Examples</h2>
        <h3>Why SQL?</h3>
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
