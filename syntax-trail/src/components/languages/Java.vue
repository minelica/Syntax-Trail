<!-- filepath: /c:/Users/masinovic/syntax-trail/syntax-trail/src/components/languages/Java.vue -->
<script setup lang="ts">
import '@/assets/main.css'

const title = 'Java'
const description = [
  'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.',
  'Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them.',
  'The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages.'
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
    description: 'Variables in Java can be defined using different data types such as int, float, double, and String.',
    content: `
      int x = 10;
      float y = 20.5f;
      double z = 30.5;
      String name = "John";
    `
  },
  {
    title: 'Functions',
    description: 'Functions (or methods) in Java are defined within classes using the `void` keyword for methods that do not return a value, or the return type for methods that return a value.',
    content: `
      public int add(int a, int b) {
        return a + b;
      }

      public void greet() {
        System.out.println("Hello, World!");
      }
    `
  },
  {
    title: 'Classes',
    description: 'Classes are defined using the `class` keyword. A class can contain fields, methods, and constructors.',
    content: `
      public class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
          this.name = name;
          this.age = age;
        }

        public String greet() {
          return "Hello, my name is " + name;
        }
      }

      Person john = new Person("John", 30);
    `
  },
  {
    title: 'Modules',
    description: 'Java supports modular programming with the `module` keyword introduced in Java 9.',
    content: `
      module mymodule {
        requires java.base;
        exports com.example.mymodule;
      }
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Java is a versatile programming language used in various domains. Here are some common use cases:

      - **Web Development**: Java is used to build server-side web applications. Popular frameworks include Spring and JavaServer Faces (JSF).
      - **Enterprise Applications**: Java is widely used for building large-scale enterprise applications due to its robustness and scalability.
      - **Mobile Applications**: Java is the primary language for developing Android applications.
      - **Scientific Computing**: Java is used in scientific research for simulations, data analysis, and visualization.
      - **Game Development**: Java is used to develop games and multimedia applications. Libraries like LWJGL provide tools for game development.
      - **Embedded Systems**: Java is used in embedded systems and IoT devices due to its portability and performance.
    `,
    bulletPoints: [
      'Building server-side web applications.',
      'Developing large-scale enterprise applications.',
      'Creating Android mobile applications.',
      'Performing scientific research and simulations.',
      'Developing games and multimedia applications.',
      'Programming embedded systems and IoT devices.'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Java was created by James Gosling at Sun Microsystems and released in 1995. It was designed to have as few implementation dependencies as possible, allowing developers to "write once, run anywhere" (WORA).

      Over the years, Java has evolved significantly. The Java Community Process (JCP) was established to oversee the development of the language and its APIs. Major versions of Java have introduced new features and improvements, such as generics, lambda expressions, and the module system.

      Today, Java is one of the most popular programming languages in the world, with a large and active community contributing to its development and ecosystem.
    `,
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: syntaxContent,
  }
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      for (int i = 0; i < 5; i++) {
        System.out.println(i);
      }

      int j = 0;
      while (j < 5) {
        System.out.println(j);
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
        System.out.println("x is greater than 10");
      } else {
        System.out.println("x is 10 or less");
      }
    `
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      try {
        int result = 10 / 0;
      } catch (ArithmeticException e) {
        System.out.println("Cannot divide by zero");
      } finally {
        System.out.println("This will always execute");
      }
    `
  }
]

const codeExamples = [
  {
    tab: 'Simple',
    description: 'A simple example demonstrating variable declaration and a loop.',
    code: `
      public class Main {
        public static void main(String[] args) {
          String name = "stranger";  // Declare your first variable
          System.out.println("Hi, " + name + "!");  // ...and use it!
          System.out.print("Current count:");
          for (int i = 0; i <= 10; i++) {  // Loop over a range from 0 to 10
            System.out.print(" " + i);
          }
        }
      }
    `
  },
  {
    tab: 'Asynchronous',
    description: 'An example demonstrating asynchronous programming using CompletableFuture.',
    code: `
      import java.util.concurrent.CompletableFuture;
      import java.util.concurrent.ExecutionException;

      public class Main {
        public static void main(String[] args) throws ExecutionException, InterruptedException {
          long start = System.currentTimeMillis();
          CompletableFuture<Void>[] tasks = new CompletableFuture[10];

          for (int i = 1; i <= 10; i++) {
            int index = i;
            tasks[i - 1] = CompletableFuture.runAsync(() -> {
              try {
                Thread.sleep(3000 - index * 300);
              } catch (InterruptedException e) {
                e.printStackTrace();
              }
              log(start, "Countdown: " + index);
            });
          }

          CompletableFuture.allOf(tasks).get();
          log(start, "Liftoff!");
        }

        private static void log(long start, String msg) {
          System.out.println(msg + " after " + (System.currentTimeMillis() - start) / 1000.0 + "s");
        }
      }
    `
  },
  {
    tab: 'Object-oriented',
    description: 'An example demonstrating object-oriented programming with classes and inheritance.',
    code: `
      public abstract class Person {
        protected String name;

        public Person(String name) {
          this.name = name;
        }

        public abstract void greet();
      }

      public interface FoodConsumer {
        void eat();
        default void pay(int amount) {
          System.out.println("Delicious! Here's " + amount + " bucks!");
        }
      }

      public class RestaurantCustomer extends Person implements FoodConsumer {
        private String dish;

        public RestaurantCustomer(String name, String dish) {
          super(name);
          this.dish = dish;
        }

        public void order() {
          System.out.println(dish + ", please!");
        }

        @Override
        public void eat() {
          System.out.println("*Eats " + dish + "*");
        }

        @Override
        public void greet() {
          System.out.println("It's me, " + name + ".");
        }
      }

      public class Main {
        public static void main(String[] args) {
          RestaurantCustomer sam = new RestaurantCustomer("Sam", "Mixed salad");
          sam.greet();  // An implementation of an abstract function
          sam.order();  // A member function
          sam.eat();  // An implementation of an interface function
          sam.pay(10);  // A default implementation in an interface
        }
      }
    `
  },
  {
    tab: 'Functional',
    description: 'An example demonstrating functional programming with streams and lambda expressions.',
    code: `
      import java.util.Arrays;
      import java.util.List;
      import java.util.Map;
      import java.util.stream.Collectors;

      public class Main {
        public static void main(String[] args) {
          List<Message> messages = Arrays.asList(
            new Message("Ma", "Hey! Where are you?"),
            new Message("Adam", "Everything going according to plan today?"),
            new Message("Ma", "Please reply. I've lost you!")
          );

          // Who sent the most messages?
          Map<String, Long> senderCounts = messages.stream()
            .collect(Collectors.groupingBy(Message::getSender, Collectors.counting()));
          String frequentSender = senderCounts.entrySet().stream()
            .max(Map.Entry.comparingByValue())
            .map(Map.Entry::getKey)
            .orElse(null);
          System.out.println(frequentSender);  // Ma

          // Who are the senders?
          List<String> senders = messages.stream()
            .filter(message -> !message.getBody().isBlank() && !message.isRead())
            .map(Message::getSender)
            .distinct()
            .sorted()
            .collect(Collectors.toList());
          System.out.println(senders);  // [Adam, Ma]
        }
      }

      class Message {
        private String sender;
        private String body;
        private boolean isRead;

        public Message(String sender, String body) {
          this.sender = sender;
          this.body = body;
          this.isRead = false;
        }

        public String getSender() {
          return sender;
        }

        public String getBody() {
          return body;
        }

        public boolean isRead() {
          return isRead;
        }
      }
    `
  },
  {
    tab: 'Ideal for tests',
    description: 'An example demonstrating unit testing with JUnit.',
    code: `
      import org.junit.jupiter.api.Test;
      import static org.junit.jupiter.api.Assertions.*;

      public class MainTest {
        @Test
        public void testSum() {
          int a = 1;
          int b = 41;
          assertEquals(42, sum(a, b), "Wrong result for sum(" + a + ", " + b + ")");
        }

        @Test
        public void testComputation() {
          assertTrue(compute(), "Computation failed");
        }

        public int sum(int a, int b) {
          return a + b;
        }

        public void setup() {
          // Setup code here
        }

        public boolean compute() {
          return true;
        }
      }
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is Java?',
    answer: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
  },
  {
    id: 2,
    question: 'Is Java hard to learn?',
    answer: 'Java is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of Java?',
    answer: 'Java is used in web development, enterprise applications, mobile applications, and more.',
  },
  {
    id: 4,
    question: 'What are some popular Java libraries and frameworks?',
    answer: 'Popular Java libraries and frameworks include Spring, Hibernate, Apache Struts, and JavaFX.',
  },
  {
    id: 5,
    question: 'What is the difference between Java and JavaScript?',
    answer: 'Although Java and JavaScript have similar names, they are distinct programming languages with different designs and purposes.',
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
        <h3>Why Java?</h3>
        <el-tabs>
          <el-tab-pane v-for="example in codeExamples" :key="example.tab" :label="example.tab">
            <p>{{ example.description }}</p>
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
