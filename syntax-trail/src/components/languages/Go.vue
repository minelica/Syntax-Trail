<script setup lang="ts">
import '@/assets/main.css'

const title = 'Go'
const description = [
  'Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It is known for its simplicity, efficiency, and strong concurrency support.',
  'Go is often used for building scalable and high-performance applications, particularly in the areas of web development, cloud services, and distributed systems.',
  'Go has a clean and concise syntax, making it easy to read and write. It also includes a powerful standard library and built-in support for concurrent programming with goroutines and channels.',
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
      'Variables in Go are defined using the `var` keyword or the shorthand `:=` syntax.',
    content: `
      var x int = 10
      y := 20
      z := "Hello, World!"
    `,
  },
  {
    title: 'Functions',
    description: 'Functions in Go are defined using the `func` keyword.',
    content: `
      func add(a int, b int) int {
        return a + b
      }

      func greet() {
        fmt.Println("Hello, World!")
      }
    `,
  },
  {
    title: 'Structs',
    description: 'Structs are used to define custom data types in Go.',
    content: `
      type Person struct {
        Name string
        Age  int
      }

      func (p Person) Greet() string {
        return "Hello, my name is " + p.Name
      }

      john := Person{Name: "John", Age: 30}
    `,
  },
  {
    title: 'Packages',
    description:
      'Go supports modular programming with packages. Use the `import` statement to include packages.',
    content: `
      import (
        "fmt"
        "time"
      )

      func main() {
        fmt.Println("Current time:", time.Now())
      }
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code. Go only has the `for` loop.',
    content: `
      for i := 0; i < 5; i++ {
        fmt.Println(i)
      }

      j := 0
      for j < 5 {
        fmt.Println(j)
        j++
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      x := 15
      if x > 10 {
        fmt.Println("x is greater than 10")
      } else {
        fmt.Println("x is 10 or less")
      }
    `,
  },
  {
    title: 'Error Handling',
    description: 'Error handling in Go is done using the `error` type and the `if` statement.',
    content: `
      func divide(a, b int) (int, error) {
        if b == 0 {
          return 0, fmt.Errorf("cannot divide by zero")
        }
        return a / b, nil
      }

      result, err := divide(10, 0)
      if err != nil {
        fmt.Println("Error:", err)
      } else {
        fmt.Println("Result:", result)
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Go is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Building high-performance web applications (Web Development).',
      'Developing cloud-based applications and services (Cloud Services).',
      'Creating distributed systems and microservices (Distributed Systems).',
      'Building tools for DevOps and infrastructure management (DevOps Tools).',
      'Developing network applications and protocols (Networking).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Go was designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It was first released in 2009 as an open-source project.

      Go was created to address the challenges of large-scale software development at Google, with a focus on simplicity, efficiency, and strong support for concurrent programming.

      Since its release, Go has gained widespread adoption and has become one of the most popular programming languages for building scalable and high-performance applications.
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
      package main

      import "fmt"

      func main() {
        name := "stranger"  // Declare your first variable
        fmt.Println("Hi,", name)  // ...and use it!
        fmt.Print("Current count:")
        for i := 0; i <= 10; i++ {  // Loop over a range from 0 to 10
          fmt.Print(" ", i)
        }
      }
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      package main

      import (
        "fmt"
        "time"
      )

      func main() {
        start := time.Now()
        for i := 1; i <= 10; i++ {
          go func(i int) {
            time.Sleep(time.Duration(3-i*0.3) * time.Second)
            log(start, fmt.Sprintf("Countdown: %d", i))
          }(i)
        }

        time.Sleep(4 * time.Second)
        log(start, "Liftoff!")
      }

      func log(start time.Time, msg string) {
        fmt.Printf("%s after %.2fs\n", msg, time.Since(start).Seconds())
      }
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      package main

      import "fmt"

      type Person struct {
        name string
      }

      func (p *Person) greet() {
        fmt.Println("It's me,", p.name)
      }

      type FoodConsumer interface {
        eat()
        pay(amount int)
      }

      type RestaurantCustomer struct {
        Person
        dish string
      }

      func (rc *RestaurantCustomer) order() {
        fmt.Println(rc.dish, "please!")
      }

      func (rc *RestaurantCustomer) eat() {
        fmt.Println("*Eats", rc.dish, "*")
      }

      func (rc *RestaurantCustomer) pay(amount int) {
        fmt.Println("Delicious! Here's", amount, "bucks!")
      }

      func main() {
        sam := &RestaurantCustomer{
          Person: Person{name: "Sam"},
          dish:   "Mixed salad",
        }
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
      package main

      import (
        "fmt"
        "sort"
      )

      type Message struct {
        sender string
        body   string
        isRead bool
      }

      func main() {
        messages := []Message{
          {sender: "Ma", body: "Hey! Where are you?"},
          {sender: "Adam", body: "Everything going according to plan today?"},
          {sender: "Ma", body: "Please reply. I've lost you!"},
        }

        // Who sent the most messages?
        senderCounts := make(map[string]int)
        for _, msg := range messages {
          senderCounts[msg.sender]++
        }
        frequentSender := ""
        maxCount := 0
        for sender, count := range senderCounts {
          if count > maxCount {
            frequentSender = sender
            maxCount = count
          }
        }
        fmt.Println(frequentSender)  // Ma

        // Who are the senders?
        senders := make(map[string]struct{})
        for _, msg := range messages {
          if msg.body != "" && !msg.isRead {
            senders[msg.sender] = struct{}{}
          }
        }
        senderList := make([]string, 0, len(senders))
        for sender := range senders {
          senderList = append(senderList, sender)
        }
        sort.Strings(senderList)
        fmt.Println(senderList)  // [Adam, Ma]
      }
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      package main

      import (
        "testing"
      )

      func sum(a, b int) int {
        return a + b
      }

      func setup() {
        // Setup code here
      }

      func compute() bool {
        return true
      }

      func TestSum(t *testing.T) {
        a := 1
        b := 41
        if result := sum(a, b); result != 42 {
          t.Errorf("Wrong result for sum(%d, %d): got %d, want %d", a, b, result, 42)
        }
      }

      func TestComputation(t *testing.T) {
        setup()
        if !compute() {
          t.Error("Computation failed")
        }
      }
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is Go?',
    answer:
      'Go, also known as Golang, is a statically typed, compiled programming language designed at Google.',
  },
  {
    id: 2,
    question: 'Is Go hard to learn?',
    answer:
      'Go is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of Go?',
    answer:
      'Go is used in web development, cloud services, distributed systems, DevOps tools, and networking.',
  },
  {
    id: 4,
    question: 'What are some popular Go libraries and frameworks?',
    answer:
      'Popular Go libraries and frameworks include Gin, Echo, and Revel for web development, and gRPC for networking.',
  },
  {
    id: 5,
    question: 'What is the difference between Go and Python?',
    answer:
      'Go is a statically typed, compiled language known for its performance and concurrency support, while Python is a dynamically typed, interpreted language known for its simplicity and versatility.',
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
        <h3>Why Go?</h3>
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
