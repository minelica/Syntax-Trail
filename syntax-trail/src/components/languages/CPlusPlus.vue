<script setup lang="ts">
import '@/assets/main.css'

const title = 'C++'
const description = [
  'C++ is a high-level, general-purpose programming language created as an extension of the C programming language. It is known for its performance, efficiency, and flexibility, making it suitable for a wide range of applications.',
  'C++ supports multiple programming paradigms, including procedural, object-oriented, and generic programming. It provides low-level memory manipulation features, which are essential for system programming and resource-constrained applications.',
  'C++ is widely used in various domains, including system software, game development, real-time simulations, and high-performance computing.',
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
      'Variables in C++ can be defined using different data types such as int, float, double, and std::string.',
    content: `
      int x = 10;
      float y = 20.5f;
      double z = 30.5;
      std::string name = "John";
    `,
  },
  {
    title: 'Functions',
    description:
      'Functions in C++ are defined using the return type, function name, and parameters.',
    content: `
      int add(int a, int b) {
        return a + b;
      }

      void greet() {
        std::cout << "Hello, World!" << std::endl;
      }
    `,
  },
  {
    title: 'Classes',
    description:
      'Classes are defined using the `class` keyword. A class can contain fields, methods, and constructors.',
    content: `
      class Person {
      private:
        std::string name;
        int age;

      public:
        Person(std::string name, int age) : name(name), age(age) {}

        std::string greet() {
          return "Hello, my name is " + name;
        }
      };

      Person john("John", 30);
    `,
  },
  {
    title: 'Templates',
    description: 'C++ supports generic programming with templates.',
    content: `
      template <typename T>
      T add(T a, T b) {
        return a + b;
      }

      int main() {
        std::cout << add(3, 4) << std::endl;  // 7
        std::cout << add(3.5, 4.5) << std::endl;  // 8.0
        return 0;
      }
    `,
  },
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      for (int i = 0; i < 5; i++) {
        std::cout << i << std::endl;
      }

      int j = 0;
      while (j < 5) {
        std::cout << j << std::endl;
        j++;
      }
    `,
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      int x = 15;
      if (x > 10) {
        std::cout << "x is greater than 10" << std::endl;
      } else {
        std::cout << "x is 10 or less" << std::endl;
      }
    `,
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      try {
        int result = 10 / 0;
      } catch (const std::exception& e) {
        std::cout << "Exception: " << e.what() << std::endl;
      }
    `,
  },
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      C++ is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Developing operating systems and device drivers (System Programming).',
      'Creating high-performance games (Game Development).',
      'Performing real-time simulations (Real-time Simulations).',
      'Conducting scientific computing and financial modeling (High-performance Computing).',
      'Programming embedded systems and IoT devices (Embedded Systems).',
    ],
  },
  {
    id: 'history',
    title: 'History',
    content: `
      C++ was created by Bjarne Stroustrup at Bell Labs in 1983 as an extension of the C programming language. It was designed to provide object-oriented features while maintaining the performance and efficiency of C.

      Over the years, C++ has evolved significantly, with major versions introducing new features and improvements. The ISO/IEC standardization of C++ began in 1998, and subsequent versions have added features like templates, the Standard Template Library (STL), and lambda expressions.

      Today, C++ is one of the most widely used programming languages in the world, with a large and active community contributing to its development and ecosystem.
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
      #include <iostream>

      int main() {
        std::string name = "stranger";  // Declare your first variable
        std::cout << "Hi, " << name << "!" << std::endl;  // ...and use it!
        std::cout << "Current count:";
        for (int i = 0; i <= 10; i++) {  // Loop over a range from 0 to 10
          std::cout << " " << i;
        }
        std::cout << std::endl;
        return 0;
      }
    `,
  },
  {
    tab: 'Asynchronous',
    code: `
      #include <iostream>
      #include <future>
      #include <chrono>

      void log(std::chrono::steady_clock::time_point start, const std::string& msg) {
        auto now = std::chrono::steady_clock::now();
        std::cout << msg << " after " << std::chrono::duration_cast<std::chrono::milliseconds>(now - start).count() / 1000.0 << "s" << std::endl;
      }

      int main() {
        auto start = std::chrono::steady_clock::now();
        std::vector<std::future<void>> tasks;

        for (int i = 1; i <= 10; i++) {
          tasks.push_back(std::async(std::launch::async, [i, start]() {
            std::this_thread::sleep_for(std::chrono::milliseconds(3000 - i * 300));
            log(start, "Countdown: " + std::to_string(i));
          }));
        }

        for (auto& task : tasks) {
          task.get();
        }

        log(start, "Liftoff!");
        return 0;
      }
    `,
  },
  {
    tab: 'Object-oriented',
    code: `
      #include <iostream>
      #include <string>

      class Person {
      protected:
        std::string name;

      public:
        Person(const std::string& name) : name(name) {}

        virtual void greet() = 0;
      };

      class FoodConsumer {
      public:
        virtual void eat() = 0;
        virtual void pay(int amount) {
          std::cout << "Delicious! Here's " << amount << " bucks!" << std::endl;
        }
      };

      class RestaurantCustomer : public Person, public FoodConsumer {
      private:
        std::string dish;

      public:
        RestaurantCustomer(const std::string& name, const std::string& dish) : Person(name), dish(dish) {}

        void order() {
          std::cout << dish << ", please!" << std::endl;
        }

        void eat() override {
          std::cout << "*Eats " << dish << "*" << std::endl;
        }

        void greet() override {
          std::cout << "It's me, " << name << "." << std::endl;
        }
      };

      int main() {
        RestaurantCustomer sam("Sam", "Mixed salad");
        sam.greet();  // An implementation of an abstract function
        sam.order();  // A member function
        sam.eat();  // An implementation of an interface function
        sam.pay(10);  // A default implementation in an interface
        return 0;
      }
    `,
  },
  {
    tab: 'Functional',
    code: `
      #include <iostream>
      #include <vector>
      #include <algorithm>
      #include <map>

      class Message {
      public:
        std::string sender;
        std::string body;
        bool isRead;

        Message(const std::string& sender, const std::string& body) : sender(sender), body(body), isRead(false) {}
      };

      int main() {
        std::vector<Message> messages = {
          Message("Ma", "Hey! Where are you?"),
          Message("Adam", "Everything going according to plan today?"),
          Message("Ma", "Please reply. I've lost you!")
        };

        // Who sent the most messages?
        std::map<std::string, int> senderCounts;
        for (const auto& message : messages) {
          senderCounts[message.sender]++;
        }
        auto frequentSender = std::max_element(senderCounts.begin(), senderCounts.end(),
          [](const auto& a, const auto& b) {
            return a.second < b.second;
          })->first;
        std::cout << frequentSender << std::endl;  // Ma

        // Who are the senders?
        std::vector<std::string> senders;
        std::for_each(messages.begin(), messages.end(), [&senders](const Message& message) {
          if (!message.body.empty() && !message.isRead) {
            senders.push_back(message.sender);
          }
        });
        std::sort(senders.begin(), senders.end());
        senders.erase(std::unique(senders.begin(), senders.end()), senders.end());
        for (const auto& sender : senders) {
          std::cout << sender << std::endl;  // Adam, Ma
        }

        return 0;
      }
    `,
  },
  {
    tab: 'Ideal for tests',
    code: `
      #include <gtest/gtest.h>

      int sum(int a, int b) {
        return a + b;
      }

      void setup() {
        // Setup code here
      }

      bool compute() {
        return true;
      }

      TEST(SumTest, HandlesPositiveInput) {
        EXPECT_EQ(sum(1, 41), 42);
      }

      TEST(ComputeTest, HandlesComputation) {
        setup();
        EXPECT_TRUE(compute());
      }

      int main(int argc, char **argv) {
        ::testing::InitGoogleTest(&argc, argv);
        return RUN_ALL_TESTS();
      }
    `,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What is C++?',
    answer:
      'C++ is a high-level, general-purpose programming language created as an extension of the C programming language.',
  },
  {
    id: 2,
    question: 'Is C++ hard to learn?',
    answer:
      'C++ can be challenging for beginners due to its complexity and low-level features, but it is a powerful language once mastered.',
  },
  {
    id: 3,
    question: 'What are the main uses of C++?',
    answer:
      'C++ is used in system programming, game development, real-time simulations, high-performance computing, and embedded systems.',
  },
  {
    id: 4,
    question: 'What are some popular C++ libraries and frameworks?',
    answer: 'Popular C++ libraries and frameworks include Boost, Qt, STL, and OpenCV.',
  },
  {
    id: 5,
    question: 'What is the difference between C and C++?',
    answer:
      'C++ is an extension of C that adds object-oriented features, templates, and other enhancements, while maintaining compatibility with C.',
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
        <h3>Why C++?</h3>
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
