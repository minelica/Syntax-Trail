<script setup lang="ts">
import '@/assets/main.css'

const title = 'R'
const description = [
  'R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. It was first released in 1993.',
  'R is widely used among statisticians and data miners for developing statistical software and data analysis. It is known for its extensive package ecosystem and powerful data visualization capabilities.',
  'R is used in various fields, including bioinformatics, social sciences, and finance, for tasks such as data manipulation, statistical modeling, and machine learning.'
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
    description: 'Variables in R are defined using the `<-` operator or the `=` operator.',
    content: `
      x <- 10
      y = 20
      z <- "Hello, World!"
    `
  },
  {
    title: 'Functions',
    description: 'Functions in R are defined using the `function` keyword.',
    content: `
      add <- function(a, b) {
        return(a + b)
      }

      greet <- function() {
        print("Hello, World!")
      }
    `
  },
  {
    title: 'Data Frames',
    description: 'Data frames are used to store tabular data in R.',
    content: `
      df <- data.frame(
        name = c("John", "Jane", "Doe"),
        age = c(30, 25, 35)
      )

      print(df)
    `
  },
  {
    title: 'Packages',
    description: 'R supports modular programming with packages. Use the `library` function to include packages.',
    content: `
      # Install a package
      install.packages("ggplot2")

      # Load a package
      library(ggplot2)

      # Use a function from the package
      ggplot(data = df, aes(x = name, y = age)) + geom_bar(stat = "identity")
    `
  }
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code. R has `for`, `while`, and `repeat` loops.',
    content: `
      for (i in 1:5) {
        print(i)
      }

      j <- 0
      while (j < 5) {
        print(j)
        j <- j + 1
      }
    `
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      x <- 15
      if (x > 10) {
        print("x is greater than 10")
      } else {
        print("x is 10 or less")
      }
    `
  },
  {
    title: 'Error Handling',
    description: 'Error handling in R is done using the `tryCatch` function.',
    content: `
      result <- tryCatch({
        10 / 0
      }, warning = function(w) {
        print("Warning: Division by zero")
      }, error = function(e) {
        print("Error: Division by zero")
      }, finally = {
        print("This will always execute")
      })
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      R is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Data manipulation, statistical modeling, and data visualization (Data Analysis).',
      'Analyzing biological data and developing bioinformatics tools (Bioinformatics).',
      'Analyzing social science data and conducting surveys (Social Sciences).',
      'Financial modeling, risk analysis, and portfolio management. (Finance)',
      'Developing machine learning models and algorithms (Machine Learning).'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      R was created by Ross Ihaka and Robert Gentleman at the University of Auckland, New Zealand, and first released in 1993. It was designed to be a free and open-source implementation of the S programming language.

      Since its release, R has gained widespread adoption and has become one of the most popular programming languages for data analysis and statistical computing. It is developed and maintained by the R Development Core Team, with contributions from the open-source community.

      Today, R is used by statisticians, data scientists, and researchers worldwide for a wide range of data analysis tasks.
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
      name <- "stranger"  // Declare your first variable
      print(paste("Hi,", name, "!"))  // ...and use it!
      print("Current count:")
      for (i in 0:10) {  // Loop over a range from 0 to 10
        print(i)
      }
    `
  },
  {
    tab: 'Data Manipulation',
    code: `
      library(dplyr)

      df <- data.frame(
        name = c("John", "Jane", "Doe"),
        age = c(30, 25, 35)
      )

      # Filter rows where age is greater than 30
      df_filtered <- df %>% filter(age > 30)
      print(df_filtered)

      # Summarize data
      df_summary <- df %>% summarize(mean_age = mean(age))
      print(df_summary)
    `
  },
  {
    tab: 'Data Visualization',
    code: `
      library(ggplot2)

      df <- data.frame(
        name = c("John", "Jane", "Doe"),
        age = c(30, 25, 35)
      )

      ggplot(data = df, aes(x = name, y = age)) +
        geom_bar(stat = "identity") +
        theme_minimal()
    `
  },
  {
    tab: 'Statistical Modeling',
    code: `
      df <- data.frame(
        x = rnorm(100),
        y = rnorm(100)
      )

      model <- lm(y ~ x, data = df)
      summary(model)
    `
  },
  {
    tab: 'Machine Learning',
    code: `
      library(caret)

      df <- data.frame(
        x = rnorm(100),
        y = rnorm(100)
      )

      model <- train(y ~ x, data = df, method = "lm")
      print(model)
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is R?',
    answer: 'R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing.',
  },
  {
    id: 2,
    question: 'Is R hard to learn?',
    answer: 'R is well-suited for beginners as it has a simple syntax and is easy to learn and use, especially if you are already familiar with statistical concepts.',
  },
  {
    id: 3,
    question: 'What are the main uses of R?',
    answer: 'R is used for data analysis, bioinformatics, social sciences, finance, and machine learning.',
  },
  {
    id: 4,
    question: 'What are some popular R packages?',
    answer: 'Popular R packages include ggplot2 for data visualization, dplyr for data manipulation, and caret for machine learning.',
  },
  {
    id: 5,
    question: 'What is the difference between R and Python?',
    answer: 'R is designed specifically for statistical computing and data analysis, while Python is a general-purpose programming language with a wide range of applications. Both languages are widely used in data science.',
  },
]

</script>

<template>
  <div class="language-page">
    <!-- Header -->
    <header class="hero">
      <h1>{{ title }}</h1>
      <br>
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
          <br>
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
          <br>
          <p>{{ element.description }}</p>
          <br>
          <pre><code v-html="element.content"></code></pre>
        </el-card>
      </section>

      <!-- Code Examples -->
      <section id="code-examples">
        <h2>Code Examples</h2>
        <h3>Why R?</h3>
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
