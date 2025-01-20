<script setup lang="ts">
import '@/assets/main.css'
// import { de } from 'element-plus/es/locales.mjs'
const title = 'JavaScript'
const description = [
  'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.',
  'Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.',
  'Although Java and JavaScript are similar in name and syntax, the two languages are distinct and differ greatly in design.',
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
    description: 'Variables in JavaScript can be defined using \`var\`, \`let\`, or \`const\`.',
    content: `
      var x = 10;
      let y = 20;
      const z = 30;
    `,
  },
  {
    title: 'Functions',
    description: 'Functions can be defined using the \`function\` keyword or as arrow functions.',
    content: `
      function add(a, b) {
        return a + b;
      }

      const subtract = (a, b) => a - b;
    `,
  },
  {
    title: 'Classes',
    description: 'Classes are defined using the \`class\` keyword.',
    content: `
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        greet() {
          return \`Hello, my name is \${this.name}\`;
        }
      }

      const john = new Person('John', 30);
    `,
  },
  {
    title: 'Modules',
    description: 'JavaScript supports modular programming with \`export\` and \`import\`.',
    content: `
      // In myModule.js
      export const myVariable = 42;
      export function myFunction() {
        return 'Hello, World!';
      }

      // In another file
      import { myVariable, myFunction } from './myModule.js';
      console.log(myVariable); // 42
      console.log(myFunction()); // Hello, World!
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      for (let i = 0; i < 5; i++) {
        console.log(i);
      }

      let j = 0;
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
      if (x > 10) {
        console.log('x is greater than 10');
      } else {
        console.log('x is 10 or less');
      }
    `,
  },
  {
    title: 'Events',
    description: 'Events are used to handle user interactions.',
    content: `
      document.getElementById('myButton').addEventListener('click', function() {
        alert('Button clicked!');
      });
    `,
  },
  {
    title: 'DOM Manipulation',
    description: 'DOM Manipulation is used to interact with and modify the HTML document.',
    content: `
      document.getElementById('myDiv').innerHTML = 'Hello, World!';
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content:
      "JavaScript is the dominant client-side scripting language of the Web, with 99% of all websites using it for this purpose. Scripts are embedded in or included from HTML documents and interact with the DOM. All major web browsers have a built-in JavaScript engine that executes the code on the user's device.",
    bulletPoints: [
      'Loading new web page content without reloading the page, via Ajax or a WebSocket.',
      'Web page animations, such as fading objects in and out, resizing, and moving them.',
      'Playing browser games.',
      'Controlling the playback of streaming media.',
      'Generating pop-up ads or alert boxes.',
      'Validating input values of a web form before the data is sent to a web server.',
      "Logging data about the user's behavior then sending it to a server.",
      'Redirecting a user to another page.',
      "Storing and retrieving data on the user's device, via the storage or IndexedDB standards.",
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. Initially, it was developed in just 10 days and was originally named Mocha, then renamed to LiveScript, and finally to JavaScript.

      Over the years, JavaScript has evolved significantly. In 1996, JavaScript was submitted to ECMA International for standardization, resulting in the ECMAScript specification. The first edition of ECMAScript was published in 1997.

      Subsequent versions of ECMAScript introduced many new features and improvements. ECMAScript 5 (ES5) was released in 2009, adding features like strict mode, JSON support, and more. ECMAScript 6 (ES6), also known as ECMAScript 2015, was a major update released in 2015, introducing features like classes, modules, arrow functions, and template literals.

      Today, JavaScript is a versatile and powerful language used for both client-side and server-side development. It is supported by all major web browsers and has a large and active developer community.
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
      function main() {
          const name = "stranger";        // Declare your first variable
          console.log(\`Hi, \${name}!\`);    // ...and use it!
          process.stdout.write("Current count:");
          for (let i = 0; i <= 10; i++) { // Loop over a range from 0 to 10
              process.stdout.write(\` \${i}\`);
          }
      }

      main();
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      import { setTimeout } from 'timers/promises';

      async function main() {
          const start = Date.now();
          const tasks = [];

          for (let i = 1; i <= 10; i++) {
              tasks.push(
                  (async () => {
                      await setTimeout(3000 - i * 300);
                      log(start, \`Countdown: \${i}\`);
                  })()
              );
          }

          await Promise.all(tasks);
          log(start, "Liftoff!");
      }

      function log(start, msg) {
          console.log(\`\${msg} (on \${process.pid}) after \${(Date.now() - start) / 1000}s\`);
      }

      main();
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      class Person {
          constructor(name) {
              this.name = name;
          }

          greet() {
              throw new Error("Abstract method 'greet' must be implemented");
          }
      }

      const FoodConsumer = {
          eat() {
              throw new Error("Method 'eat' must be implemented");
          },
          pay(amount) {
              console.log(\`Delicious! Here's \${amount} bucks!\`);
          }
      };

      class RestaurantCustomer extends Person {
          constructor(name, dish) {
              super(name);
              this.dish = dish;
          }

          order() {
              console.log(\`\${this.dish}, please!\`);
          }

          eat() {
              console.log(\`*Eats \${this.dish}*\`);
          }

          greet() {
              console.log(\`It's me, \${this.name}.\`);
          }
      }

      // Mixin FoodConsumer methods into RestaurantCustomer
      Object.assign(RestaurantCustomer.prototype, FoodConsumer);

      function main() {
          const sam = new RestaurantCustomer("Sam", "Mixed salad");
          sam.greet(); // An implementation of an abstract function
          sam.order(); // A member function
          sam.eat();   // An implementation of an interface function
          sam.pay(10); // A default implementation in an interface
      }

      main();
    `,
  },
  {
    tab: 'Functional',
    code: `
      class Message {
          constructor(sender, body, isRead = false) {
              this.sender = sender;
              this.body = body;
              this.isRead = isRead;
          }
      }

      const messages = [
          new Message("Ma", "Hey! Where are you?"),
          new Message("Adam", "Everything going according to plan today?"),
          new Message("Ma", "Please reply. I've lost you!")
      ];

      function main() {
          // Who sent the most messages?
          const frequentSender = messages
              .reduce((acc, message) => {
                  acc[message.sender] = (acc[message.sender] || 0) + 1;
                  return acc;
              }, {});
          const maxMessages = Math.max(...Object.values(frequentSender));
          const mostFrequentSender = Object.keys(frequentSender).find(sender => frequentSender[sender] === maxMessages);
          console.log(mostFrequentSender); // Ma

          // Who are the senders?
          const senders = [...new Set(messages
              .filter(message => message.body.trim() !== "" && !message.isRead)
              .map(message => message.sender))]
              .sort();
          console.log(senders); // [Adam, Ma]
      }

      main();
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      const { test, expect } = require('@jest/globals');

      function sum(a, b) {
          return a + b;
      }

      function setup() {
          // Setup code here
      }

      function compute() {
          return true;
      }

      test('test sum', () => {
          const a = 1;
          const b = 41;
          expect(sum(a, b)).toBe(42);
      });

      test('test computation', () => {
          expect(() => {
              setup();
              return compute();
          }).not.toThrow();
      });
    `,
  },
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
  {
    id: 3,
    question: 'What is the difference between Java and JavaScript?',
    answer:
      'Although Java and JavaScript have similar names, they are distinct programming languages with different designs and purposes.',
  },
  {
    id: 4,
    question: 'What are the main uses of JavaScript?',
    answer:
      'JavaScript is primarily used for web development, but it can also be used for server-side programming, mobile app development, and desktop applications.',
  },
  {
    id: 5,
    question: 'What are some key features of JavaScript?',
    answer:
      'JavaScript supports features like DOM manipulation, event handling, asynchronous programming, object-oriented programming, and more.',
  },
  {
    id: 6,
    question: 'What are ECMAScript and ES6?',
    answer:
      'ECMAScript is the standard on which JavaScript is based. ES6 (also known as ECMAScript 2015) is a version of the standard that introduced many new features and improvements.',
  },
  {
    id: 7,
    question: 'How can I include JavaScript in my webpage?',
    answer:
      'JavaScript can be embedded directly in HTML files within <script> tags or by linking to external JavaScript files.',
  },
  {
    id: 8,
    question: 'What are some popular JavaScript libraries and frameworks?',
    answer:
      'Popular JavaScript libraries and frameworks include jQuery, React, Angular, and Vue.js.',
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

      <!-- Langauge Elements -->
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
        <h3>Why JavaScript?</h3>
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
