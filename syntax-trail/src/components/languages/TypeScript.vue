<script setup lang="ts">
import '@/assets/main.css'

const title = 'TypeScript'
const description = [
  'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It was developed and maintained by Microsoft and first released in 2012.',
  'TypeScript adds optional static types to JavaScript, which can help catch errors early in the development process and improve code quality. It also supports modern JavaScript features and transpiles to plain JavaScript, making it compatible with all JavaScript environments.',
  'TypeScript is widely used for large-scale web applications, server-side development, and more.',
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
      'Variables in TypeScript can be defined using `var`, `let`, or `const`, with optional type annotations.',
    content: `
      var x: number = 10;
      let y: number = 20;
      const z: string = "Hello, World!";
    `,
  },
  {
    title: 'Functions',
    description:
      'Functions in TypeScript are defined using the `function` keyword or as arrow functions, with optional type annotations.',
    content: `
      function add(a: number, b: number): number {
        return a + b;
      }

      const subtract = (a: number, b: number): number => a - b;
    `,
  },
  {
    title: 'Classes',
    description:
      'Classes are defined using the `class` keyword, with optional type annotations for properties and methods.',
    content: `
      class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }

        greet(): string {
          return \`Hello, my name is \${this.name}\`;
        }
      }

      const john = new Person("John", 30);
    `,
  },
  {
    title: 'Modules',
    description:
      'TypeScript supports modular programming with ES6 modules. Use the `import` and `export` statements to include and export modules.',
    content: `
      // In myModule.ts
      export const myVariable: number = 42;

      export function myFunction(): string {
        return "Hello, World!";
      }

      // In another file
      import { myVariable, myFunction } from './myModule';

      console.log(myVariable); // 42
      console.log(myFunction()); // Hello, World!
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description:
      'Loops are used to repeat a block of code. TypeScript has `for`, `while`, and `do-while` loops.',
    content: `
      for (let i: number = 0; i < 5; i++) {
        console.log(i);
      }

      let j: number = 0;
      while (j < 5) {
        console.log(j);
        j++;
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      let x: number = 15;
      if (x > 10) {
        console.log("x is greater than 10");
      } else {
        console.log("x is 10 or less");
      }
    `,
  },
  {
    title: 'Error Handling',
    description:
      'Error handling in TypeScript is done using the `try`, `catch`, and `finally` statements.',
    content: `
      try {
        let result: number = 10 / 0;
      } catch (e) {
        console.log("Cannot divide by zero");
      } finally {
        console.log("This will always execute");
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      TypeScript is a versatile programming language used in various domains. Here are some common use cases:

      - Web Development: TypeScript is used to build large-scale web applications with frameworks like Angular and React.
      - Server-side Development: TypeScript is used to build server-side applications with Node.js.
      - Mobile Development: TypeScript is used to build cross-platform mobile applications with frameworks like React Native.
      - Desktop Development: TypeScript is used to build cross-platform desktop applications with frameworks like Electron.
      - Library and Framework Development: TypeScript is used to develop libraries and frameworks that provide type safety and better tooling.
    `,
    bulletPoints: [
      'Building large-scale web applications with frameworks like Angular and React (Web Development).',
      'Developing server-side applications with Node.js (Server-side Development).',
      'Creating cross-platform mobile applications with frameworks like React Native (Mobile Development).',
      'Building cross-platform desktop applications with frameworks like Electron (Desktop Development).',
      'Developing libraries and frameworks that provide type safety and better tooling (Library and Framework Development).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      TypeScript was developed and maintained by Microsoft and first released in 2012. It was designed to address the challenges of large-scale JavaScript development by adding optional static types and modern JavaScript features.

      Since its release, TypeScript has gained widespread adoption and has become one of the most popular programming languages for web development. It is used by companies like Microsoft, Google, and Airbnb for building high-quality software.

      Today, TypeScript is developed and maintained by the TypeScript team at Microsoft, with contributions from the open-source community.
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
      const name: string = "stranger";  // Declare your first variable
      console.log(\`Hi, \${name}!\`);  // ...and use it!
      console.log("Current count:");
      for (let i: number = 0; i <= 10; i++) {  // Loop over a range from 0 to 10
        console.log(\` \${i}\`);
      }
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      async function main() {
        const start: number = Date.now();
        const tasks: Promise<void>[] = [];

        for (let i: number = 1; i <= 10; i++) {
          tasks.push(new Promise<void>(resolve => {
            setTimeout(() => {
              log(start, \`Countdown: \${i}\`);
              resolve();
            }, 3000 - i * 300);
          }));
        }

        await Promise.all(tasks);
        log(start, "Liftoff!");
      }

      function log(start: number, msg: string) {
        console.log(\`\${msg} after \${Date.now() - start}ms\`);
      }

      main();
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      class Person {
        name: string;

        constructor(name: string) {
          this.name = name;
        }

        greet(): void {
          console.log(\`It's me, \${this.name}.\`);
        }
      }

      interface FoodConsumer {
        eat(): void;
        pay(amount: number): void;
      }

      class RestaurantCustomer extends Person implements FoodConsumer {
        dish: string;

        constructor(name: string, dish: string) {
          super(name);
          this.dish = dish;
        }

        order(): void {
          console.log(\`\${this.dish}, please!\`);
        }

        eat(): void {
          console.log(\`*Eats \${this.dish}*\`);
        }

        pay(amount: number): void {
          console.log(\`Delicious! Here's \${amount} bucks!\`);
        }
      }

      function main() {
        const sam: RestaurantCustomer = new RestaurantCustomer("Sam", "Mixed salad");
        sam.greet();  // An implementation of an abstract function
        sam.order();  // A member function
        sam.eat();  // An implementation of an interface function
        sam.pay(10);  // A default implementation in an interface
      }

      main();
    `,
  },
  {
    tab: 'Functional',
    code: `
      interface Message {
        sender: string;
        body: string;
        isRead: boolean;
      }

      const messages: Message[] = [
        { sender: "Ma", body: "Hey! Where are you?", isRead: false },
        { sender: "Adam", body: "Everything going according to plan today?", isRead: false },
        { sender: "Ma", body: "Please reply. I've lost you!", isRead: false }
      ];

      function main() {
        // Who sent the most messages?
        const frequentSender: string | undefined = messages
          .reduce((acc: Record<string, number>, msg: Message) => {
            acc[msg.sender] = (acc[msg.sender] || 0) + 1;
            return acc;
          }, {})
          .entries()
          .reduce((a, b) => (a[1] > b[1] ? a : b))[0];
        console.log(frequentSender);  // Ma

        // Who are the senders?
        const senders: string[] = Array.from(new Set(messages
          .filter(msg => msg.body.trim() !== "" && !msg.isRead)
          .map(msg => msg.sender)))
          .sort();
        console.log(senders);  // ["Adam", "Ma"]
      }

      main();
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      import { sum, setup, compute } from './example';

      test('tests sum', () => {
        const a: number = 1;
        const b: number = 41;
        expect(sum(a, b)).toBe(42);
      });

      test('tests computation', () => {
        setup();
        expect(compute()).toBe(true);
      });

      // example.ts
      export function sum(a: number, b: number): number {
        return a + b;
      }

      export function setup(): void {
        // Setup code here
      }

      export function compute(): boolean {
        return true;
      }
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is TypeScript?',
    answer:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
  },
  {
    id: 2,
    question: 'Is TypeScript hard to learn?',
    answer:
      'TypeScript is well-suited for beginners as it has a simple syntax and is easy to learn and use, especially if you are already familiar with JavaScript.',
  },
  {
    id: 3,
    question: 'What are the main uses of TypeScript?',
    answer:
      'TypeScript is used in web development, server-side development, mobile development, desktop development, and library and framework development.',
  },
  {
    id: 4,
    question: 'What are some popular TypeScript libraries and frameworks?',
    answer:
      'Popular TypeScript libraries and frameworks include Angular, React, Vue, NestJS, and Express.',
  },
  {
    id: 5,
    question: 'What is the difference between TypeScript and JavaScript?',
    answer:
      'TypeScript adds optional static types to JavaScript, which can help catch errors early in the development process and improve code quality. It also supports modern JavaScript features and transpiles to plain JavaScript.',
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
        <h3>Why TypeScript?</h3>
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
