<script setup lang="ts">
import '@/assets/main.css'

const title = 'Rust'
const description = [
  'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It was designed by Mozilla Research and first released in 2010.',
  'Rust is known for its memory safety features, achieved without a garbage collector. It ensures safe memory management through a system of ownership with a set of rules that the compiler checks at compile time.',
  'Rust is used for a wide range of applications, from operating systems and game engines to web servers and blockchain technology.',
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
      'Variables in Rust are immutable by default and can be made mutable with the `mut` keyword.',
    content: `
      let x = 10;
      let mut y = 20;
      let z = "Hello, World!";
    `,
  },
  {
    title: 'Functions',
    description: 'Functions in Rust are defined using the `fn` keyword.',
    content: `
      fn add(a: i32, b: i32) -> i32 {
        a + b
      }

      fn greet() {
        println!("Hello, World!");
      }
    `,
  },
  {
    title: 'Structs',
    description: 'Structs are used to define custom data types in Rust.',
    content: `
      struct Person {
        name: String,
        age: i32,
      }

      impl Person {
        fn greet(&self) -> String {
          format!("Hello, my name is {}", self.name)
        }
      }

      let john = Person { name: String::from("John"), age: 30 };
    `,
  },
  {
    title: 'Modules',
    description:
      'Rust supports modular programming with modules. Use the `mod` keyword to define a module.',
    content: `
      mod my_module {
        pub fn my_function() {
          println!("Hello, World!");
        }
      }

      fn main() {
        my_module::my_function();
      }
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description:
      'Loops are used to repeat a block of code. Rust has `loop`, `while`, and `for` loops.',
    content: `
      for i in 0..5 {
        println!("{}", i);
      }

      let mut j = 0;
      while j < 5 {
        println!("{}", j);
        j += 1;
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      let x = 15;
      if x > 10 {
        println!("x is greater than 10");
      } else {
        println!("x is 10 or less");
      }
    `,
  },
  {
    title: 'Error Handling',
    description: 'Error handling in Rust is done using the `Result` and `Option` types.',
    content: `
      fn divide(a: i32, b: i32) -> Result<i32, String> {
        if b == 0 {
          Err(String::from("cannot divide by zero"))
        } else {
          Ok(a / b)
        }
      }

      match divide(10, 0) {
        Ok(result) => println!("Result: {}", result),
        Err(e) => println!("Error: {}", e),
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Rust is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Building operating systems, game engines, and other low-level systems software (Systems Programming).',
      'Developing high-performance web applications with frameworks like Rocket and Actix (Web Development).',
      'Creating blockchain technology and cryptocurrencies (Blockchain).',
      'Programming microcontrollers and other embedded devices (Embedded Systems).',
      'Creating fast and reliable command line tools (Command Line Tools).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Rust was designed by Graydon Hoare at Mozilla Research and first released in 2010. It was created to be a safe, concurrent, and practical language for systems programming.

      Since its release, Rust has gained widespread adoption and has become one of the most loved programming languages, according to developer surveys. The language is developed and maintained by the Rust Project Developers.

      Today, Rust is used by companies like Mozilla, Dropbox, and Cloudflare for building high-performance and reliable software.
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
      fn main() {
        let name = "stranger";  // Declare your first variable
        println!("Hi, {}!", name);  // ...and use it!
        print!("Current count:");
        for i in 0..=10 {  // Loop over a range from 0 to 10
          print!(" {}", i);
        }
      }
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      use tokio::time::{sleep, Duration};

      async fn main() {
        let start = std::time::Instant::now();
        let mut tasks = vec![];

        for i in 1..=10 {
          tasks.push(tokio::spawn(async move {
            sleep(Duration::from_secs_f32(3.0 - i as f32 * 0.3)).await;
            log(start, format!("Countdown: {}", i));
          }));
        }

        for task in tasks {
          task.await.unwrap();
        }
        log(start, "Liftoff!".to_string());
      }

      fn log(start: std::time::Instant, msg: String) {
        println!("{} after {:.2}s", msg, start.elapsed().as_secs_f32());
      }

      #[tokio::main]
      async fn run() {
        main().await;
      }
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      struct Person {
        name: String,
      }

      impl Person {
        fn greet(&self) {
          println!("It's me, {}.", self.name);
        }
      }

      trait FoodConsumer {
        fn eat(&self);
        fn pay(&self, amount: i32) {
          println!("Delicious! Here's {} bucks!", amount);
        }
      }

      struct RestaurantCustomer {
        person: Person,
        dish: String,
      }

      impl RestaurantCustomer {
        fn order(&self) {
          println!("{}, please!", self.dish);
        }
      }

      impl FoodConsumer for RestaurantCustomer {
        fn eat(&self) {
          println!("*Eats {}*", self.dish);
        }
      }

      fn main() {
        let sam = RestaurantCustomer {
          person: Person { name: String::from("Sam") },
          dish: String::from("Mixed salad"),
        };
        sam.person.greet();  // An implementation of an abstract function
        sam.order();  // A member function
        sam.eat();  // An implementation of an interface function
        sam.pay(10);  // A default implementation in an interface
      }
    `,
  },
  {
    tab: 'Functional',
    code: `
      struct Message {
        sender: String,
        body: String,
        is_read: bool,
      }

      fn main() {
        let messages = vec![
          Message { sender: String::from("Ma"), body: String::from("Hey! Where are you?"), is_read: false },
          Message { sender: String::from("Adam"), body: String::from("Everything going according to plan today?"), is_read: false },
          Message { sender: String::from("Ma"), body: String::from("Please reply. I've lost you!"), is_read: false },
        ];

        // Who sent the most messages?
        let frequent_sender = messages.iter()
          .fold(std::collections::HashMap::new(), |mut acc, msg| {
            *acc.entry(&msg.sender).or_insert(0) += 1;
            acc
          })
          .into_iter()
          .max_by_key(|&(_, count)| count)
          .map(|(sender, _)| sender)
          .unwrap();
        println!("{}", frequent_sender);  // Ma

        // Who are the senders?
        let mut senders: Vec<_> = messages.iter()
          .filter(|msg| !msg.body.trim().is_empty() && !msg.is_read)
          .map(|msg| &msg.sender)
          .collect();
        senders.sort();
        senders.dedup();
        println!("{:?}", senders);  // ["Adam", "Ma"]
      }
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      #[cfg(test)]
      mod tests {
        use super::*;

        fn sum(a: i32, b: i32) -> i32 {
          a + b
        }

        fn setup() {
          // Setup code here
        }

        fn compute() -> bool {
          true
        }

        #[test]
        fn test_sum() {
          let a = 1;
          let b = 41;
          assert_eq!(sum(a, b), 42, "Wrong result for sum({}, {})", a, b);
        }

        #[test]
        fn test_computation() {
          setup();
          assert!(compute(), "Computation failed");
        }
      }
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is Rust?',
    answer:
      'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety.',
  },
  {
    id: 2,
    question: 'Is Rust hard to learn?',
    answer:
      'Rust has a steep learning curve due to its strict compiler rules, but it is well-suited for beginners who want to learn safe and efficient programming.',
  },
  {
    id: 3,
    question: 'What are the main uses of Rust?',
    answer:
      'Rust is used in systems programming, web development, blockchain, embedded systems, and command line tools.',
  },
  {
    id: 4,
    question: 'What are some popular Rust libraries and frameworks?',
    answer: 'Popular Rust libraries and frameworks include Rocket, Actix, Tokio, and Diesel.',
  },
  {
    id: 5,
    question: 'What is the difference between Rust and C++?',
    answer:
      'Rust is designed to be safer and more concurrent than C++, with a focus on memory safety and thread safety without a garbage collector.',
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
        <h3>Why Rust?</h3>
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
