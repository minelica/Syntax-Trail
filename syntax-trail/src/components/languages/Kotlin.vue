<script setup lang="ts">
import '@/assets/main.css'

const title = 'Kotlin'
const description = [
  'Kotlin is a modern, statically typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript or native code. It was developed by JetBrains and first released in 2011.',
  'Kotlin is designed to be fully interoperable with Java, making it easy to use alongside existing Java code. It is known for its concise syntax, safety features, and support for both object-oriented and functional programming paradigms.',
  'Kotlin is widely used for Android app development, server-side development, and more.',
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
    description:
      'Variables in Kotlin can be defined using `val` for immutable variables and `var` for mutable variables.',
    content: `
      val x = 10
      var y = 20
      val z = "Hello, World!"
    `,
  },
  {
    title: 'Functions',
    description: 'Functions in Kotlin are defined using the `fun` keyword.',
    content: `
      fun add(a: Int, b: Int): Int {
        return a + b
      }

      fun greet() {
        println("Hello, World!")
      }
    `,
  },
  {
    title: 'Classes',
    description:
      'Classes are defined using the `class` keyword. A class can contain methods and properties.',
    content: `
      class Person(val name: String, var age: Int) {
        fun greet(): String {
          return "Hello, my name is \$name"
        }
      }

      val john = Person("John", 30)
    `,
  },
  {
    title: 'Modules',
    description:
      'Kotlin supports modular programming with packages. Use the `package` keyword to define a package.',
    content: `
      package mypackage

      fun myFunction() {
        println("Hello, World!")
      }

      fun main() {
        myFunction()
      }
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description:
      'Loops are used to repeat a block of code. Kotlin has `for`, `while`, and `do-while` loops.',
    content: `
      for (i in 0..4) {
        println(i)
      }

      var j = 0
      while (j < 5) {
        println(j)
        j++
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      val x = 15
      if (x > 10) {
        println("x is greater than 10")
      } else {
        println("x is 10 or less")
      }
    `,
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      try {
        val result = 10 / 0
      } catch (e: ArithmeticException) {
        println("Cannot divide by zero")
      } finally {
        println("This will always execute")
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Kotlin is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Developing Android applications (Android Development).',
      'Building server-side applications with frameworks like Ktor and Spring (Server-side Development).',
      'Compiling to JavaScript for building web applications (Web Development).',
      'Performing data analysis and machine learning (Data Science).',
      'Developing cross-platform desktop applications with frameworks like TornadoFX (Desktop Applications).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Kotlin was developed by JetBrains and first released in 2011. It was designed to be a modern, expressive, and safe language that is fully interoperable with Java.

      Since its release, Kotlin has gained widespread adoption, particularly in the Android development community. In 2017, Google announced official support for Kotlin on Android, further boosting its popularity.

      Today, Kotlin is used by companies like Google, Pinterest, and Square for building high-quality software.
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
      fun main() {
        val name = "stranger"  // Declare your first variable
        println("Hi, \$name!")  // ...and use it!
        print("Current count:")
        for (i in 0..10) {  // Loop over a range from 0 to 10
          print(" \$i")
        }
      }
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      import kotlinx.coroutines.*

      fun main() = runBlocking {
        val start = System.currentTimeMillis()
        val jobs = List(10) { i ->
          launch {
            delay(3000L - i * 300)
            log(start, "Countdown: \$i")
          }
        }
        jobs.forEach { it.join() }
        log(start, "Liftoff!")
      }

      fun log(start: Long, msg: String) {
        println("\$msg after \${System.currentTimeMillis() - start}ms")
      }
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      open class Person(val name: String) {
        open fun greet() {
          println("It's me, \$name.")
        }
      }

      interface FoodConsumer {
        fun eat()
        fun pay(amount: Int) {
          println("Delicious! Here's \$amount bucks!")
        }
      }

      class RestaurantCustomer(name: String, val dish: String) : Person(name), FoodConsumer {
        fun order() {
          println("\$dish, please!")
        }

        override fun eat() {
          println("*Eats \$dish*")
        }

        override fun greet() {
          println("It's me, \$name.")
        }
      }

      fun main() {
        val sam = RestaurantCustomer("Sam", "Mixed salad")
        sam.greet()  // An implementation of an abstract function
        sam.order()  // A member function
        sam.eat()  // An implementation of an interface function
        sam.pay(10)  // A default implementation in an interface
      }
    `,
  },
  {
    tab: 'Functional',
    code: `
      data class Message(val sender: String, val body: String, val isRead: Boolean)

      fun main() {
        val messages = listOf(
          Message("Ma", "Hey! Where are you?", false),
          Message("Adam", "Everything going according to plan today?", false),
          Message("Ma", "Please reply. I've lost you!", false)
        )

        // Who sent the most messages?
        val frequentSender = messages
          .groupingBy { it.sender }
          .eachCount()
          .maxByOrNull { it.value }
          ?.key
        println(frequentSender)  // Ma

        // Who are the senders?
        val senders = messages
          .filter { it.body.isNotBlank() && !it.isRead }
          .map { it.sender }
          .distinct()
          .sorted()
        println(senders)  // [Adam, Ma]
      }
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      import org.junit.Test
      import kotlin.test.assertEquals
      import kotlin.test.assertTrue

      fun sum(a: Int, b: Int): Int {
        return a + b
      }

      fun setup() {
        // Setup code here
      }

      fun compute(): Boolean {
        return true
      }

      class ExampleTests {
        @Test
        fun testSum() {
          val a = 1
          val b = 41
          assertEquals(42, sum(a, b), "Wrong result for sum(\$a, \$b)")
        }

        @Test
        fun testComputation() {
          setup()
          assertTrue(compute(), "Computation failed")
        }
      }
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is Kotlin?',
    answer:
      'Kotlin is a modern, statically typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript or native code.',
  },
  {
    id: 2,
    question: 'Is Kotlin hard to learn?',
    answer:
      'Kotlin is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of Kotlin?',
    answer:
      'Kotlin is used in Android development, server-side development, web development, data science, and desktop applications.',
  },
  {
    id: 4,
    question: 'What are some popular Kotlin libraries and frameworks?',
    answer:
      'Popular Kotlin libraries and frameworks include Ktor, Spring, Kotlinx.coroutines, and TornadoFX.',
  },
  {
    id: 5,
    question: 'What is the difference between Kotlin and Java?',
    answer:
      'Kotlin is designed to be more concise and expressive than Java, with features like null safety, extension functions, and coroutines.',
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
          <br />
          <p>{{ element.description }}</p>
          <br />
          <pre><code v-html="element.content"></code></pre>
        </el-card>
      </section>

      <!-- Code Examples -->
      <section id="code-examples">
        <h2>Code Examples</h2>
        <h3>Why Kotlin?</h3>
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
