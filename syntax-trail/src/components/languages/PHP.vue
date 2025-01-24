<script setup lang="ts">
import '@/assets/main.css'

const title = 'PHP'
const description = [
  'PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.',
  'PHP is a server-side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, and even build entire e-commerce sites.',
  'PHP is known for its simplicity, speed, and flexibility. It powers everything from blogs to the most popular websites in the world.',
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
      'Variables in PHP are prefixed with a dollar sign ($) and can store different types of data.',
    content: `
      $x = 10;
      $y = 20.5;
      $z = "Hello, World!";
    `,
  },
  {
    title: 'Functions',
    description: 'Functions in PHP are defined using the \`function\` keyword.',
    content: `
      function add($a, $b) {
        return $a + $b;
      }

      function greet() {
        echo "Hello, World!";
      }
    `,
  },
  {
    title: 'Classes',
    description:
      'Classes are defined using the \`class\` keyword. A class can contain methods and properties.',
    content: `
      class Person {
        private $name;
        private $age;

        public function __construct($name, $age) {
          $this->name = $name;
          $this->age = $age;
        }

        public function greet() {
          return "Hello, my name is " . $this->name;
        }
      }

      $john = new Person("John", 30);
    `,
  },
  {
    title: 'Modules',
    description:
      'PHP supports modular programming with the \`include\` and \`require\` statements.',
    content: `
      // In myModule.php
      <?php
      $myVariable = 42;

      function myFunction() {
        return "Hello, World!";
      }
      ?>

      // In another file
      <?php
      include 'myModule.php';
      echo $myVariable; // 42
      echo myFunction(); // Hello, World!
      ?>
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      for ($i = 0; $i < 5; $i++) {
        echo $i;
      }

      $j = 0;
      while ($j < 5) {
        echo $j;
        $j++;
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      $x = 15;
      if ($x > 10) {
        echo "x is greater than 10";
      } else {
        echo "x is 10 or less";
      }
    `,
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      try {
        $result = 10 / 0;
      } catch (DivisionByZeroError $e) {
        echo "Cannot divide by zero";
      } finally {
        echo "This will always execute";
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      PHP is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Building server-side web applications (Web Development).',
      'Writing scripts to automate tasks (Scripting).',
      'Performing data analysis and processing tasks (Data Processing).',
      'Powering content management systems like WordPress, Joomla, and Drupal (Content Management Systems).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      PHP was created by Rasmus Lerdorf in 1994. It started as a simple set of Common Gateway Interface (CGI) binaries written in the C programming language.

      Over the years, PHP has evolved significantly, with new versions introducing features such as object-oriented programming, improved performance, and enhanced security. The language is developed and maintained by The PHP Group.

      Today, PHP is one of the most popular programming languages in the world, with a large and active community contributing to its development and ecosystem.
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
      <?php
      $name = "stranger";  // Declare your first variable
      echo "Hi, $name!";  // ...and use it!
      echo "Current count:";
      for ($i = 0; $i <= 10; $i++) {  // Loop over a range from 0 to 10
        echo " $i";
      }
      ?>
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      <?php
      function asyncOperation($i) {
        return new Promise(function($resolve) use ($i) {
          sleep(3 - $i * 0.3);
          $resolve("Countdown: $i");
        });
      }

      $start = microtime(true);
      $tasks = [];

      for ($i = 1; $i <= 10; $i++) {
        $tasks[] = asyncOperation($i);
      }

      Promise\all($tasks)->then(function($results) use ($start) {
        foreach ($results as $result) {
          echo $result . " after " . (microtime(true) - $start) . "s\n";
        }
        echo "Liftoff!";
      });
      ?>
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      <?php
      abstract class Person {
        protected $name;

        public function __construct($name) {
          $this->name = $name;
        }

        abstract public function greet();
      }

      interface FoodConsumer {
        public function eat();
        public function pay($amount);
      }

      class RestaurantCustomer extends Person implements FoodConsumer {
        private $dish;

        public function __construct($name, $dish) {
          parent::__construct($name);
          $this->dish = $dish;
        }

        public function order() {
          echo "$this->dish, please!";
        }

        public function eat() {
          echo "*Eats $this->dish*";
        }

        public function greet() {
          echo "It's me, $this->name.";
        }

        public function pay($amount) {
          echo "Delicious! Here's $amount bucks!";
        }
      }

      $sam = new RestaurantCustomer("Sam", "Mixed salad");
      $sam->greet();  // An implementation of an abstract function
      $sam->order();  // A member function
      $sam->eat();  // An implementation of an interface function
      $sam->pay(10);  // A default implementation in an interface
      ?>
    `,
  },
  {
    tab: 'Functional',
    code: `
      <?php
      $messages = [
        ["sender" => "Ma", "body" => "Hey! Where are you?"],
        ["sender" => "Adam", "body" => "Everything going according to plan today?"],
        ["sender" => "Ma", "body" => "Please reply. I've lost you!"]
      ];

      // Who sent the most messages?
      $senderCounts = array_count_values(array_column($messages, 'sender'));
      $frequentSender = array_search(max($senderCounts), $senderCounts);
      echo $frequentSender;  // Ma

      // Who are the senders?
      $senders = array_unique(array_column(array_filter($messages, function($msg) {
        return trim($msg['body']) !== "";
      }), 'sender'));
      sort($senders);
      echo implode(", ", $senders);  // Adam, Ma
      ?>
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      <?php
      use PHPUnit\Framework\TestCase;

      class ExampleTest extends TestCase {
        public function testSum() {
          $a = 1;
          $b = 41;
          $this->assertEquals(42, sum($a, $b), "Wrong result for sum($a, $b)");
        }

        public function testComputation() {
          setup();
          $this->assertTrue(compute(), "Computation failed");
        }

        public function sum($a, $b) {
          return $a + $b;
        }

        public function setup() {
          // Setup code here
        }

        public function compute() {
          return true;
        }
      }
      ?>
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is PHP?',
    answer:
      'PHP is a popular general-purpose scripting language that is especially suited to web development.',
  },
  {
    id: 2,
    question: 'Is PHP hard to learn?',
    answer:
      'PHP is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of PHP?',
    answer:
      'PHP is used in web development, scripting, data processing, and content management systems.',
  },
  {
    id: 4,
    question: 'What are some popular PHP libraries and frameworks?',
    answer: 'Popular PHP libraries and frameworks include Laravel, Symfony, and CodeIgniter.',
  },
  {
    id: 5,
    question: 'What is the difference between PHP and JavaScript?',
    answer:
      'PHP is a server-side scripting language, while JavaScript is primarily a client-side scripting language. They are often used together to create dynamic web applications.',
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
        <h3>Why PHP?</h3>
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
