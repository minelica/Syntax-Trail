<script setup lang="ts">
import '@/assets/main.css'

const title = 'Dart'
const description = [
  'Dart is a client-optimized programming language for fast apps on any platform. It was developed by Google and first released in 2011.',
  'Dart is designed for building web, server, and mobile applications. It is known for its performance, productivity, and ease of use. Dart code can be compiled to native code or JavaScript, making it versatile for various platforms.',
  'Dart is the language behind Flutter, a popular framework for building natively compiled applications for mobile, web, and desktop from a single codebase.'
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
    description: 'Variables in Dart can be defined using `var`, `final`, or `const`.',
    content: `
      var x = 10;
      final y = 20;
      const z = 'Hello, World!';
    `
  },
  {
    title: 'Functions',
    description: 'Functions in Dart are defined using the `void` keyword for functions that do not return a value, or the return type for functions that do.',
    content: `
      int add(int a, int b) {
        return a + b;
      }

      void greet() {
        print('Hello, World!');
      }
    `
  },
  {
    title: 'Classes',
    description: 'Classes are defined using the `class` keyword. A class can contain methods and properties.',
    content: `
      class Person {
        String name;
        int age;

        Person(this.name, this.age);

        String greet() {
          return 'Hello, my name is \$name';
        }
      }

      var john = Person('John', 30);
    `
  },
  {
    title: 'Modules',
    description: 'Dart supports modular programming with libraries. Use the `import` statement to include libraries.',
    content: `
      // In my_library.dart
      library my_library;

      int myVariable = 42;

      String myFunction() {
        return 'Hello, World!';
      }

      // In another file
      import 'my_library.dart';

      void main() {
        print(myVariable); // 42
        print(myFunction()); // Hello, World!
      }
    `
  }
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code. Dart has `for`, `while`, and `do-while` loops.',
    content: `
      for (int i = 0; i < 5; i++) {
        print(i);
      }

      int j = 0;
      while (j < 5) {
        print(j);
        j++;
      }
    `
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      int x = 15;
      if (x > 10) {
        print('x is greater than 10');
      } else {
        print('x is 10 or less');
      }
    `
  },
  {
    title: 'Error Handling',
    description: 'Error handling in Dart is done using the `try`, `catch`, and `finally` statements.',
    content: `
      try {
        int result = 10 ~/ 0;
      } catch (e) {
        print('Cannot divide by zero');
      } finally {
        print('This will always execute');
      }
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Dart is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Building web applications with frameworks like AngularDart (Web Development).',
      'Building cross-platform mobile applications with Flutter (Mobile Development).',
      'Developing server-side applications with frameworks like Aqueduct (Server-side Development).',
      'Building cross-platform desktop applications with Flutter (Desktop Development).',
      'Creating command line tools and scripts (Command Line Tools).'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Dart was developed by Google and first released in 2011. It was designed to address the challenges of modern web development by providing a language that is easy to learn, productive, and performant.

      Since its release, Dart has evolved significantly, with the introduction of features like sound null safety and the Flutter framework. Dart has gained widespread adoption, particularly in the mobile development community.

      Today, Dart is used by companies like Google, Alibaba, and eBay for building high-quality software.
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
      void main() {
        var name = 'stranger';  // Declare your first variable
        print('Hi, \$name!');  // ...and use it!
        print('Current count:');
        for (int i = 0; i <= 10; i++) {  // Loop over a range from 0 to 10
          print(' \$i');
        }
      }
    `
  },
  {
    tab: 'Asynchronous',
    code: `
      import 'dart:async';

      Future<void> main() async {
        var start = DateTime.now();
        var tasks = <Future<void>>[];

        for (int i = 1; i <= 10; i++) {
          tasks.add(Future<void>.delayed(Duration(seconds: 3 - i * 0.3), () {
            log(start, 'Countdown: \$i');
          }));
        }

        await Future.wait(tasks);
        log(start, 'Liftoff!');
      }

      void log(DateTime start, String msg) {
        print('\$msg after \${DateTime.now().difference(start).inSeconds}s');
      }
    `
  },
  {
    tab: 'Object-oriented',
    code: `
      class Person {
        String name;

        Person(this.name);

        void greet() {
          print("It's me, \$name.");
        }
      }

      abstract class FoodConsumer {
        void eat();
        void pay(int amount) {
          print('Delicious! Here\'s \$amount bucks!');
        }
      }

      class RestaurantCustomer extends Person implements FoodConsumer {
        String dish;

        RestaurantCustomer(String name, this.dish) : super(name);

        void order() {
          print('\$dish, please!');
        }

        @override
        void eat() {
          print('*Eats \$dish*');
        }

        @override
        void greet() {
          print("It's me, \$name.");
        }
      }

      void main() {
        var sam = RestaurantCustomer('Sam', 'Mixed salad');
        sam.greet();  // An implementation of an abstract function
        sam.order();  // A member function
        sam.eat();  // An implementation of an interface function
        sam.pay(10);  // A default implementation in an interface
      }
    `
  },
  {
    tab: 'Functional',
    code: `
      class Message {
        String sender;
        String body;
        bool isRead;

        Message(this.sender, this.body, {this.isRead = false});
      }

      void main() {
        var messages = [
          Message('Ma', 'Hey! Where are you?'),
          Message('Adam', 'Everything going according to plan today?'),
          Message('Ma', 'Please reply. I\'ve lost you!')
        ];

        // Who sent the most messages?
        var frequentSender = messages
            .fold<Map<String, int>>({}, (acc, msg) {
              acc[msg.sender] = (acc[msg.sender] ?? 0) + 1;
              return acc;
            })
            .entries
            .reduce((a, b) => a.value > b.value ? a : b)
            .key;
        print(frequentSender);  // Ma

        // Who are the senders?
        var senders = messages
            .where((msg) => msg.body.trim().isNotEmpty && !msg.isRead)
            .map((msg) => msg.sender)
            .toSet()
            .toList()
            ..sort();
        print(senders);  // [Adam, Ma]
      }
    `
  },
  {
    tab: 'Ideal for tests',
    code: `
      import 'package:test/test.dart';

      int sum(int a, int b) {
        return a + b;
      }

      void setup() {
        // Setup code here
      }

      bool compute() {
        return true;
      }

      void main() {
        test('test sum', () {
          var a = 1;
          var b = 41;
          expect(sum(a, b), equals(42));
        });

        test('test computation', () {
          setup();
          expect(compute(), isTrue);
        });
      }
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is Dart?',
    answer: 'Dart is a client-optimized programming language for fast apps on any platform.',
  },
  {
    id: 2,
    question: 'Is Dart hard to learn?',
    answer: 'Dart is well-suited for beginners as it has a simple syntax and is easy to learn and use, especially if you are already familiar with JavaScript or Java.',
  },
  {
    id: 3,
    question: 'What are the main uses of Dart?',
    answer: 'Dart is used in web development, mobile development, server-side development, desktop development, and for creating command line tools.',
  },
  {
    id: 4,
    question: 'What are some popular Dart frameworks?',
    answer: 'Popular Dart frameworks include Flutter for mobile and desktop development, and AngularDart for web development.',
  },
  {
    id: 5,
    question: 'What is the difference between Dart and JavaScript?',
    answer: 'Dart is designed for building fast apps on any platform, with a focus on performance and productivity. JavaScript is a versatile language primarily used for web development. Dart can be compiled to JavaScript for web applications.',
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
        <h3>Why Dart?</h3>
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
