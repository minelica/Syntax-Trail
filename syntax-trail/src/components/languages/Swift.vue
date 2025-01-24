<script setup lang="ts">
import '@/assets/main.css'

const title = 'Swift'
const description = [
  'Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS app development. It was introduced by Apple in 2014 and has quickly gained popularity due to its performance and safety features.',
  'Swift is designed to be easy to read and write, with a clean and modern syntax. It is also highly performant, thanks to its use of the LLVM compiler and its support for both object-oriented and functional programming paradigms.',
  'Swift is open-source and has a large and active community contributing to its development and ecosystem.',
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
      'Variables in Swift can be defined using `var` for mutable variables and `let` for constants.',
    content: `
      var x = 10
      let y = 20
      let z = "Hello, World!"
    `,
  },
  {
    title: 'Functions',
    description: 'Functions in Swift are defined using the `func` keyword.',
    content: `
      func add(a: Int, b: Int) -> Int {
        return a + b
      }

      func greet() {
        print("Hello, World!")
      }
    `,
  },
  {
    title: 'Classes',
    description:
      'Classes are defined using the `class` keyword. A class can contain methods and properties.',
    content: `
      class Person {
        var name: String
        var age: Int

        init(name: String, age: Int) {
          self.name = name
          self.age = age
        }

        func greet() -> String {
          return "Hello, my name is \\(name)"
        }
      }

      let john = Person(name: "John", age: 30)
    `,
  },
  {
    title: 'Modules',
    description: 'Swift supports modular programming with the `import` statement.',
    content: `
      import Foundation

      let date = Date()
      print("Current date and time: \\(date)")
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      for i in 0..<5 {
        print(i)
      }

      var j = 0
      while j < 5 {
        print(j)
        j += 1
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      let x = 15
      if x > 10 {
        print("x is greater than 10")
      } else {
        print("x is 10 or less")
      }
    `,
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      do {
        let result = try someFunctionThatThrows()
        print(result)
      } catch {
        print("An error occurred: \\(error)")
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Swift is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Developing iOS applications (iOS Development).',
      'Building macOS applications (macOS Development).',
      'Creating watchOS applications (watchOS Development).',
      'Developing tvOS applications (tvOS Development).',
      'Server-side programming with frameworks like Vapor and Kitura (Server-side Development).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Swift was introduced by Apple in 2014 as a modern replacement for Objective-C. It was designed to be safer, faster, and more expressive than its predecessor.

      Since its release, Swift has undergone several major updates, with new versions introducing features such as error handling, protocol extensions, and improved performance. In 2015, Apple made Swift open-source, allowing the community to contribute to its development.

      Today, Swift is one of the most popular programming languages for iOS and macOS development, with a large and active community.
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
      let name = "stranger"  // Declare your first variable
      print("Hi, \\(name)!")  // ...and use it!
      print("Current count:", terminator: "")
      for i in 0...10 {  // Loop over a range from 0 to 10
        print(" \\(i)", terminator: "")
      }
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      import Foundation

      func main() async {
        let start = Date()
        var tasks: [Task<Void, Never>] = []

        for i in 1...10 {
          tasks.append(Task {
            try await Task.sleep(nanoseconds: UInt64(3 - i * 0.3) * 1_000_000_000)
            log(start: start, message: "Countdown: \\(i)")
          })
        }

        await Task.whenAllComplete(tasks)
        log(start: start, message: "Liftoff!")
      }

      func log(start: Date, message: String) {
        print("\\(message) after \\(Date().timeIntervalSince(start))s")
      }

      Task {
        await main()
      }
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      class Person {
        var name: String

        init(name: String) {
          self.name = name
        }

        func greet() {
          fatalError("Abstract method 'greet' must be implemented")
        }
      }

      protocol FoodConsumer {
        func eat()
        func pay(amount: Int)
      }

      extension FoodConsumer {
        func pay(amount: Int) {
          print("Delicious! Here's \\(amount) bucks!")
        }
      }

      class RestaurantCustomer: Person, FoodConsumer {
        var dish: String

        init(name: String, dish: String) {
          self.dish = dish
          super.init(name: name)
        }

        func order() {
          print("\\(dish), please!")
        }

        func eat() {
          print("*Eats \\(dish)*")
        }

        override func greet() {
          print("It's me, \\(name).")
        }
      }

      func main() {
        let sam = RestaurantCustomer(name: "Sam", dish: "Mixed salad")
        sam.greet()  // An implementation of an abstract function
        sam.order()  // A member function
        sam.eat()  // An implementation of an interface function
        sam.pay(amount: 10)  // A default implementation in an interface
      }

      main()
    `,
  },
  {
    tab: 'Functional',
    code: `
      struct Message {
        let sender: String
        let body: String
        let isRead: Bool
      }

      let messages = [
        Message(sender: "Ma", body: "Hey! Where are you?", isRead: false),
        Message(sender: "Adam", body: "Everything going according to plan today?", isRead: false),
        Message(sender: "Ma", body: "Please reply. I've lost you!", isRead: false)
      ]

      func main() {
        // Who sent the most messages?
        let frequentSender = messages
          .reduce(into: [:]) { counts, message in
            counts[message.sender, default: 0] += 1
          }
          .max { $0.value < $1.value }?
          .key
        print(frequentSender ?? "No messages")  // Ma

        // Who are the senders?
        let senders = Set(messages
          .filter { !$0.body.trimmingCharacters(in: .whitespaces).isEmpty && !$0.isRead }
          .map { $0.sender })
          .sorted()
        print(senders)  // ["Adam", "Ma"]
      }

      main()
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      import XCTest

      func sum(_ a: Int, _ b: Int) -> Int {
        return a + b
      }

      func setup() {
        // Setup code here
      }

      func compute() -> Bool {
        return true
      }

      class ExampleTests: XCTestCase {
        func testSum() {
          let a = 1
          let b = 41
          XCTAssertEqual(sum(a, b), 42, "Wrong result for sum(\\(a), \\(b))")
        }

        func testComputation() {
          setup()
          XCTAssertTrue(compute(), "Computation failed")
        }
      }

      ExampleTests.defaultTestSuite.run()
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is Swift?',
    answer:
      'Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS app development.',
  },
  {
    id: 2,
    question: 'Is Swift hard to learn?',
    answer:
      'Swift is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of Swift?',
    answer:
      'Swift is used in iOS, macOS, watchOS, and tvOS development, as well as server-side programming.',
  },
  {
    id: 4,
    question: 'What are some popular Swift libraries and frameworks?',
    answer: 'Popular Swift libraries and frameworks include SwiftUI, Combine, Vapor, and Kitura.',
  },
  {
    id: 5,
    question: 'What is the difference between Swift and Objective-C?',
    answer:
      'Swift is a modern language designed to be safer and more expressive than Objective-C, with a cleaner syntax and better performance.',
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
        <h3>Why Swift?</h3>
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
