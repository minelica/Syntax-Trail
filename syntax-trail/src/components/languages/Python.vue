<script setup lang="ts">
import '@/assets/main.css'
// import { de } from 'element-plus/es/locales.mjs'
const title = 'Python'
const description = [
  'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.',
  'Python is dynamically type-checked and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.',
  'Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community.'
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
    "title": "Variables",
    "description": "Variables in Python can be defined using simple assignment.",
    "content": `
      x = 10
      y = 20
      z = 30
    `
  },
  {
    "title": "Functions",
    "description": "Functions can be defined using the `def` keyword.",
    "content": `
      def add(a, b):
        return a + b

      def subtract(a, b):
        return a - b
    `
  },
  {
    "title": "Classes",
    "description": "Classes are defined using the `class` keyword.",
    "content": `
      class Person:
        def __init__(self, name, age):
          self.name = name
          self.age = age

        def greet(self):
          return f"Hello, my name is {self.name}"

      john = Person('John', 30)
    `
  },
  {
    "title": "Modules",
    "description": "Python supports modular programming with `import` and `from`.",
    "content": `
      # In my_module.py
      my_variable = 42

      def my_function():
        return 'Hello, World!'

      # In another file
      from my_module import my_variable, my_function
      print(my_variable)  # 42
      print(my_function())  # Hello, World!
    `
  }
]

const languageElementsContent = [
  {
    "title": "Loops",
    "description": "Loops are used to repeat a block of code.",
    "content": `
      for i in range(5):
        print(i)

      j = 0
      while j < 5:
        print(j)
        j += 1
    `
  },
  {
    "title": "Conditions",
    "description": "Conditions are used to perform different actions based on different conditions.",
    "content": `
      x = 15
      if x > 10:
        print('x is greater than 10')
      else:
        print('x is 10 or less')
    `
  },
  {
    "title": "List Comprehensions",
    "description": "List comprehensions provide a concise way to create lists.",
    "content": `
      squares = [x ** 2 for x in range(10)]
      print(squares)  #[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
    `
  },
  {
    "title": "Dictionary Comprehensions",
    "description": "Dictionary comprehensions provide a concise way to create dictionaries.",
    "content": `
      square_dict = { x: x ** 2 for x in range(10) }
      print(square_dict)  # { 0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81 }
    `
  },
  {
    "title": "Exception Handling",
    "description": "Exception handling is used to handle errors gracefully.",
    "content": `
      try:
        result = 10 / 0
      except ZeroDivisionError:
        print("Cannot divide by zero")
      finally:
        print("This will always execute")
  `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content:
      'Python is a versatile programming language used in various domains. Here are some common use cases:',
    bulletPoints: [
      'Web Development: Python is used to build server-side web applications. Popular frameworks include Django and Flask.',
      'Data Science and Machine Learning: Python is widely used for data analysis, visualization, and machine learning. Libraries like NumPy, pandas, Matplotlib, and scikit-learn are commonly used.',
      'Automation and Scripting: Python is often used for writing scripts to automate repetitive tasks, such as file manipulation, web scraping, and system administration.',
      'Scientific Computing: Python is used in scientific research for simulations, data analysis, and visualization. Libraries like SciPy and SymPy are commonly used.',
      'Artificial Intelligence: Python is a popular choice for developing AI applications, including natural language processing, computer vision, and robotics. Libraries like TensorFlow and PyTorch are widely used.',
      'Game Development: Python is used to develop games and multimedia applications. Libraries like Pygame provide tools for game development.',
      'Education: Python is often used as a teaching language in schools and universities due to its simplicity and readability.'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Python was created by Guido van Rossum and first released in 1991. It was designed to emphasize code readability and simplicity. Over the years, Python has evolved significantly, with major versions like Python 2 and Python 3 introducing new features and improvements.

      Python 3, released in 2008, is the current major version and includes many enhancements over Python 2. Python 2 reached its end of life in 2020, and users are encouraged to migrate to Python 3.

      Today, Python is one of the most popular programming languages in the world, with a large and active community contributing to its development and ecosystem.
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
    "tab": "Simple",
    "code": `
      def main():
        name = "stranger"  # Declare your first variable
        print(f"Hi, {name}!")  # ...and use it!
        print("Current count:", end="")
        for i in range(11):  # Loop over a range from 0 to 10
          print(f" {i}", end="")
        print()

      main()
    `
  },
  {
    "tab": "Asynchronous",
    "code": `
      import asyncio

      async def main():
        start = asyncio.get_event_loop().time()
        tasks = []

        async def countdown(i):
          await asyncio.sleep(3 - i * 0.3)
          log(start, f"Countdown: {i}")

        for i in range(1, 11):
          tasks.append(countdown(i))

        await asyncio.gather(*tasks)
        log(start, "Liftoff!")

      def log(start, msg):
        print(f"{msg} after {asyncio.get_event_loop().time() - start:.2f}s")

      asyncio.run(main())
    `
  },
  {
    "tab": "Object-oriented",
    "code": `
      class Person:
        def __init__(self, name):
          self.name = name

        def greet(self):
          raise NotImplementedError("Abstract method 'greet' must be implemented")

      class FoodConsumer:
        def eat(self):
          raise NotImplementedError("Method 'eat' must be implemented")

        def pay(self, amount):
          print(f"Delicious! Here's {amount} bucks!")

      class RestaurantCustomer(Person, FoodConsumer):
        def __init__(self, name, dish):
          super().__init__(name)
          self.dish = dish

        def order(self):
          print(f"{self.dish}, please!")

        def eat(self):
          print(f"*Eats {self.dish}*")

        def greet(self):
          print(f"It's me, {self.name}.")

      def main():
        sam = RestaurantCustomer("Sam", "Mixed salad")
        sam.greet()  # An implementation of an abstract function
        sam.order()  # A member function
        sam.eat()  # An implementation of an interface function
        sam.pay(10)  # A default implementation in an interface

      main()
    `
  },
  {
    "tab": "Functional",
    "code": `
      class Message:
        def __init__(self, sender, body, is_read=False):
          self.sender = sender
          self.body = body
          self.is_read = is_read

      messages = [
        Message("Ma", "Hey! Where are you?"),
        Message("Adam", "Everything going according to plan today?"),
        Message("Ma", "Please reply. I've lost you!")
      ]

      def main():
        # Who sent the most messages?
        from collections import Counter
        sender_counts = Counter(message.sender for message in messages)
        frequent_sender = sender_counts.most_common(1)[0][0]
        print(frequent_sender)  # Ma

        # Who are the senders?
        senders = sorted(set(
          message.sender for message in messages
          if message.body.strip() and not message.is_read
        ))
        print(senders)  # [Adam, Ma]

      main()
    `
  },
  {
    "tab": "Ideal for tests",
    "code": `
      import unittest

      def sum(a, b):
        return a + b

      def setup():
        # Setup code here
        pass

      def compute():
        return True

      class TestSum(unittest.TestCase):
        def test_sum(self):
          a = 1
          b = 41
          self.assertEqual(sum(a, b), 42, f"Wrong result for sum({a}, {b})")

        def test_computation(self):
          setup()
          self.assertTrue(compute(), "Computation failed")

      if __name__ == '__main__':
        unittest.main()
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is Python?',
    answer: 'Python is a high-level, interpreted programming language known for its readability and versatility.',
  },
  {
    id: 2,
    question: 'Is Python hard to learn?',
    answer: 'Python is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of Python?',
    answer: 'Python is used in web development, data science, machine learning, automation, scientific computing, artificial intelligence, game development, and education.',
  },
  {
    id: 4,
    question: 'What are some popular Python libraries and frameworks?',
    answer: 'Popular Python libraries and frameworks include Django, Flask, NumPy, pandas, Matplotlib, scikit-learn, TensorFlow, PyTorch, and Pygame.',
  },
  {
    id: 5,
    question: 'What is the difference between Python 2 and Python 3?',
    answer: 'Python 3 is the current major version and includes many enhancements over Python 2. Python 2 reached its end of life in 2020, and users are encouraged to migrate to Python 3.',
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
          <!-- <br> -->
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
          <br>
          <p>{{ element.description }}</p>
          <br>
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
