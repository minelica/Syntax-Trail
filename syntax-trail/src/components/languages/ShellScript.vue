<script setup lang="ts">
import '@/assets/main.css'

const title = 'Shell Script'
const description = [
  'Shell scripting is a powerful way to automate tasks and manage system configurations. It is commonly used in Unix-based operating systems like Linux and macOS.',
  'Shell scripts are written for the shell, or command line interpreter, of an operating system. The most common shell is Bash (Bourne Again SHell), but other shells like Zsh, Ksh, and Fish are also used.',
  'Shell scripts can be used for a variety of tasks, including file manipulation, program execution, and text processing.',
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
    title: 'Variables',
    description: 'Variables in shell scripts are defined without any type declaration.',
    content: `
      x=10
      y=20
      z="Hello, World!"
    `,
  },
  {
    title: 'Functions',
    description:
      'Functions in shell scripts are defined using the `function` keyword or simply by writing the function name followed by parentheses.',
    content: `
      function add() {
        local a=$1
        local b=$2
        echo $((a + b))
      }

      greet() {
        echo "Hello, World!"
      }
    `,
  },
  {
    title: 'Conditionals',
    description: 'Conditionals in shell scripts are written using `if`, `elif`, `else`, and `fi`.',
    content: `
      if [ $x -gt 10 ]; then
        echo "x is greater than 10"
      else
        echo "x is 10 or less"
      fi
    `,
  },
  {
    title: 'Loops',
    description: 'Loops in shell scripts are written using `for`, `while`, and `until`.',
    content: `
      for i in {1..5}; do
        echo $i
      done

      j=0
      while [ $j -lt 5 ]; do
        echo $j
        j=$((j + 1))
      done
    `,
  },
]

const languageElementsContent = [
  {
    title: 'File Operations',
    description: 'File operations in shell scripts include creating, reading, and deleting files.',
    content: `
      # Create a file
      touch myfile.txt

      # Write to a file
      echo "Hello, World!" > myfile.txt

      # Read from a file
      cat myfile.txt

      # Delete a file
      rm myfile.txt
    `,
  },
  {
    title: 'Text Processing',
    description:
      'Text processing in shell scripts can be done using tools like `grep`, `awk`, and `sed`.',
    content: `
      # Search for a pattern in a file
      grep "pattern" myfile.txt

      # Print specific columns from a file
      awk '{print $1, $3}' myfile.txt

      # Replace text in a file
      sed 's/old/new/g' myfile.txt
    `,
  },
  {
    title: 'Process Management',
    description:
      'Process management in shell scripts includes starting, stopping, and monitoring processes.',
    content: `
      # Start a process
      myprocess &

      # List running processes
      ps aux

      # Kill a process
      kill $!
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Shell scripting is a versatile tool used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Automating system maintenance tasks and managing configurations (System Administration).',
      'Automating deployment pipelines and managing infrastructure (DevOps).',
      'Automating data extraction, transformation, and loading (ETL) processes (Data Processing).',
      'Automating build and deployment processes (Application Development).',
      'Automating security scans and monitoring (Security).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Shell scripting has a long history dating back to the early days of Unix. The Bourne shell (sh) was introduced in 1977 as the default shell for Unix. It was later followed by the C shell (csh) and the Korn shell (ksh).

      In 1989, the Bourne Again SHell (Bash) was released as a free software replacement for the Bourne shell. Bash became the default shell for many Unix-based operating systems, including Linux.

      Over the years, other shells like Zsh, Fish, and PowerShell have been developed, each with its own features and improvements. Today, shell scripting remains a powerful tool for automating tasks and managing systems.
    `,
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: syntaxContent,
  },
]

const codeExamples = [
  {
    tab: 'Simple',
    code: `
      #!/bin/bash
      name="stranger"  # Declare your first variable
      echo "Hi, $name!"  # ...and use it!
      echo -n "Current count:"
      for i in {0..10}; do  # Loop over a range from 0 to 10
        echo -n " $i"
      done
      echo
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      #!/bin/bash
      start=$(date +%s)
      for i in {1..10}; do
        (
          sleep $((3 - i * 0.3))
          echo "Countdown: $i after $(($(date +%s) - start))s"
        ) &
      done
      wait
      echo "Liftoff!"
    `,
  },
  {
    tab: 'File Operations',
    code: `
      #!/bin/bash
      # Create a file
      touch myfile.txt

      # Write to a file
      echo "Hello, World!" > myfile.txt

      # Read from a file
      cat myfile.txt

      # Delete a file
      rm myfile.txt
    `,
  },
  {
    tab: 'Text Processing',
    code: `
      #!/bin/bash
      # Create a file with sample text
      echo -e "name,age\nJohn,30\nJane,25\nDoe,35" > myfile.txt

      # Search for a pattern in a file
      grep "Jane" myfile.txt

      # Print specific columns from a file
      awk -F, '{print $1, $2}' myfile.txt

      # Replace text in a file
      sed 's/Jane/Jenny/g' myfile.txt
    `,
  },
  {
    tab: 'Process Management',
    code: `
      #!/bin/bash
      # Start a process
      sleep 100 &

      # List running processes
      ps aux

      # Kill a process
      kill $!
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is shell scripting?',
    answer:
      'Shell scripting is a way to automate tasks and manage system configurations using a command line interpreter.',
  },
  {
    id: 2,
    question: 'Is shell scripting hard to learn?',
    answer:
      'Shell scripting is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of shell scripting?',
    answer:
      'Shell scripting is used for system administration, DevOps, data processing, application development, and security.',
  },
  {
    id: 4,
    question: 'What are some popular shells?',
    answer: 'Popular shells include Bash, Zsh, Ksh, and Fish.',
  },
  {
    id: 5,
    question: 'What is the difference between Bash and other shells?',
    answer:
      'Bash is the most common shell and is known for its simplicity and compatibility. Other shells like Zsh and Fish offer additional features and improvements.',
  },
]
</script>

<template>
  <div class="language-page">
    <!-- Header -->
    <header class="hero">
      <h1>{{ title }}</h1>
      <br />
      <div>
        <p v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>
      </div>
    </header>

    <!-- Table of Contents -->
    <nav class="table-of-contents">
      <ul>
        <h3 style="padding-left: 10px; padding-bottom: 20px">Table of contents</h3>
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
            <br />
            <p>{{ item.description }}</p>
            <br />
            <pre><code v-html="item.content"></code></pre>
          </el-card>
        </div>
        <div v-if="section.bulletPoints">
          <br />
          <h3>Examples of scripted behavior:</h3>
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
          <br />
          <p>{{ element.description }}</p>
          <br />
          <pre><code v-html="element.content"></code></pre>
        </el-card>
      </section>

      <!-- Code Examples -->
      <section id="code-examples">
        <h2>Code Examples</h2>
        <h3>Why Shell Script?</h3>
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
