<!-- filepath: /c:/Users/masinovic/syntax-trail/syntax-trail/src/components/languages/CSharp.vue -->
<script setup lang="ts">
import '@/assets/main.css'

const title = 'C#'
const description = [
  'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft. It is part of the .NET framework and is used for a wide range of applications, including web development, desktop applications, and game development.',
  'C# is designed to be simple, powerful, and type-safe. It has a rich set of features, including garbage collection, exception handling, and support for asynchronous programming.',
  'C# is known for its strong integration with the .NET framework, which provides a large library of pre-built classes and functions for common programming tasks.'
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
    description: 'Variables in C# can be defined using different data types such as int, float, double, and string.',
    content: `
      int x = 10;
      float y = 20.5f;
      double z = 30.5;
      string name = "John";
    `
  },
  {
    title: 'Functions',
    description: 'Functions (or methods) in C# are defined within classes using the `void` keyword for methods that do not return a value, or the return type for methods that return a value.',
    content: `
      public int Add(int a, int b) {
        return a + b;
      }

      public void Greet() {
        Console.WriteLine("Hello, World!");
      }
    `
  },
  {
    title: 'Classes',
    description: 'Classes are defined using the `class` keyword. A class can contain fields, methods, and constructors.',
    content: `
      public class Person {
        private string name;
        private int age;

        public Person(string name, int age) {
          this.name = name;
          this.age = age;
        }

        public string Greet() {
          return "Hello, my name is " + name;
        }
      }

      Person john = new Person("John", 30);
    `
  },
  {
    title: 'Modules',
    description: 'C# supports modular programming with the `namespace` keyword.',
    content: `
      namespace MyNamespace {
        public class MyClass {
          public void MyMethod() {
            Console.WriteLine("Hello, World!");
          }
        }
      }
    `
  }
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      for (int i = 0; i < 5; i++) {
        Console.WriteLine(i);
      }

      int j = 0;
      while (j < 5) {
        Console.WriteLine(j);
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
        Console.WriteLine("x is greater than 10");
      } else {
        Console.WriteLine("x is 10 or less");
      }
    `
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      try {
        int result = 10 / 0;
      } catch (DivideByZeroException e) {
        Console.WriteLine("Cannot divide by zero");
      } finally {
        Console.WriteLine("This will always execute");
      }
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      C# is a versatile programming language used in various domains. Here are some common use cases:

      Web Development (C# is used to build server-side web applications with ASP.NET),
      Desktop Applications (C# is used to develop Windows desktop applications with Windows Forms and WPF),
      Game Development (C# is the primary language for developing games with the Unity game engine),
      Mobile Applications (C# is used to develop cross-platform mobile applications with Xamarin),
      Cloud Services (C# is used to build cloud-based applications and services with Azure).
    `,
    bulletPoints: [
      'Building server-side web applications with ASP.NET.',
      'Developing Windows desktop applications with Windows Forms and WPF.',
      'Creating games with the Unity game engine.',
      'Developing cross-platform mobile applications with Xamarin.',
      'Building cloud-based applications and services with Azure.'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      C# was developed by Microsoft and first released in 2000 as part of the .NET framework. It was designed to be a simple, modern, and object-oriented language that could be used to develop a wide range of applications.

      Over the years, C# has evolved significantly, with new versions introducing features such as generics, LINQ, async/await, and pattern matching. The language is developed and maintained by Microsoft, with input from the developer community.

      Today, C# is one of the most popular programming languages in the world, with a large and active community contributing to its development and ecosystem.
    `,
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: syntaxContent,
  }
]

const codeExamples = [
  {
    tab: 'Simple',
    code: `
      using System;

      class Program {
        static void Main() {
          string name = "stranger";  // Declare your first variable
          Console.WriteLine("Hi, " + name + "!");  // ...and use it!
          Console.Write("Current count:");
          for (int i = 0; i <= 10; i++) {  // Loop over a range from 0 to 10
            Console.Write(" " + i);
          }
        }
      }
    `
  },
  {
    tab: 'Asynchronous',
    code: `
      using System;
      using System.Threading.Tasks;

      class Program {
        static async Task Main() {
          var start = DateTime.Now;
          var tasks = new Task[10];

          for (int i = 1; i <= 10; i++) {
            int index = i;
            tasks[i - 1] = Task.Run(async () => {
              await Task.Delay(3000 - index * 300);
              Log(start, "Countdown: " + index);
            });
          }

          await Task.WhenAll(tasks);
          Log(start, "Liftoff!");
        }

        static void Log(DateTime start, string msg) {
          Console.WriteLine($"{msg} after {(DateTime.Now - start).TotalSeconds:F2}s");
        }
      }
    `
  },
  {
    tab: 'Object-oriented',
    code: `
      using System;

      public abstract class Person {
        protected string name;

        public Person(string name) {
          this.name = name;
        }

        public abstract void Greet();
      }

      public interface FoodConsumer {
        void Eat();
        void Pay(int amount) {
          Console.WriteLine("Delicious! Here's " + amount + " bucks!");
        }
      }

      public class RestaurantCustomer : Person, FoodConsumer {
        private string dish;

        public RestaurantCustomer(string name, string dish) : base(name) {
          this.dish = dish;
        }

        public void Order() {
          Console.WriteLine(dish + ", please!");
        }

        public void Eat() {
          Console.WriteLine("*Eats " + dish + "*");
        }

        public override void Greet() {
          Console.WriteLine("It's me, " + name + ".");
        }
      }

      class Program {
        static void Main() {
          var sam = new RestaurantCustomer("Sam", "Mixed salad");
          sam.Greet();  // An implementation of an abstract function
          sam.Order();  // A member function
          sam.Eat();  // An implementation of an interface function
          sam.Pay(10);  // A default implementation in an interface
        }
      }
    `
  },
  {
    tab: 'Functional',
    code: `
      using System;
      using System.Collections.Generic;
      using System.Linq;

      class Program {
        class Message {
          public string Sender { get; }
          public string Body { get; }
          public bool IsRead { get; }

          public Message(string sender, string body, bool isRead = false) {
            Sender = sender;
            Body = body;
            IsRead = isRead;
          }
        }

        static void Main() {
          var messages = new List<Message> {
            new Message("Ma", "Hey! Where are you?"),
            new Message("Adam", "Everything going according to plan today?"),
            new Message("Ma", "Please reply. I've lost you!")
          };

          // Who sent the most messages?
          var frequentSender = messages
            .GroupBy(m => m.Sender)
            .OrderByDescending(g => g.Count())
            .First().Key;
          Console.WriteLine(frequentSender);  // Ma

          // Who are the senders?
          var senders = messages
            .Where(m => !string.IsNullOrWhiteSpace(m.Body) && !m.IsRead)
            .Select(m => m.Sender)
            .Distinct()
            .OrderBy(s => s)
            .ToList();
          Console.WriteLine(string.Join(", ", senders));  // Adam, Ma
        }
      }
    `
  },
  {
    tab: 'Ideal for tests',
    code: `
      using NUnit.Framework;

      public class Tests {
        [Test]
        public void TestSum() {
          int a = 1;
          int b = 41;
          Assert.AreEqual(42, Sum(a, b), "Wrong result for sum(" + a + ", " + b + ")");
        }

        [Test]
        public void TestComputation() {
          Setup();
          Assert.IsTrue(Compute(), "Computation failed");
        }

        public int Sum(int a, int b) {
          return a + b;
        }

        public void Setup() {
          // Setup code here
        }

        public bool Compute() {
          return true;
        }
      }
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is C#?',
    answer: 'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft.',
  },
  {
    id: 2,
    question: 'Is C# hard to learn?',
    answer: 'C# is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of C#?',
    answer: 'C# is used in web development, desktop applications, game development, mobile applications, and cloud services.',
  },
  {
    id: 4,
    question: 'What are some popular C# libraries and frameworks?',
    answer: 'Popular C# libraries and frameworks include ASP.NET, Windows Forms, WPF, Unity, and Xamarin.',
  },
  {
    id: 5,
    question: 'What is the difference between C# and C++?',
    answer: 'C# and C++ are distinct programming languages with different designs and purposes. C# is managed and runs on the .NET framework, while C++ is unmanaged and is used for system-level programming.',
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
            <br>
            <p>{{ item.description }}</p>
            <br>
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
          <br>
          <p>{{ element.description }}</p>
          <br>
          <pre><code v-html="element.content"></code></pre>
        </el-card>
      </section>

      <!-- Code Examples -->
      <section id="code-examples">
        <h2>Code Examples</h2>
        <h3>Why C#?</h3>
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
