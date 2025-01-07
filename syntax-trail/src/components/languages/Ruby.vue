<!-- filepath: /c:/Users/masinovic/syntax-trail/syntax-trail/src/components/languages/Ruby.vue -->
<script setup lang="ts">
import '@/assets/main.css'

const title = 'Ruby'
const description = [
  'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
  'Ruby is often used for web development, particularly with the Ruby on Rails framework, which is known for its convention over configuration approach and rapid development capabilities.',
  'Ruby supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It also has a rich set of built-in functions and libraries.'
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
    description: 'Variables in Ruby are dynamically typed and do not require explicit type declarations.',
    content: `
      x = 10
      y = 20.5
      z = "Hello, World!"
    `
  },
  {
    title: 'Functions',
    description: 'Functions (or methods) in Ruby are defined using the `def` keyword.',
    content: `
      def add(a, b)
        a + b
      end

      def greet
        puts "Hello, World!"
      end
    `
  },
  {
    title: 'Classes',
    description: 'Classes are defined using the `class` keyword. A class can contain methods and instance variables.',
    content: `
      class Person
        def initialize(name, age)
          @name = name
          @age = age
        end

        def greet
          "Hello, my name is #{@name}"
        end
      end

      john = Person.new("John", 30)
    `
  },
  {
    title: 'Modules',
    description: 'Ruby supports modular programming with the `module` keyword.',
    content: `
      module MyModule
        def self.my_method
          "Hello, World!"
        end
      end

      puts MyModule.my_method
    `
  }
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code.',
    content: `
      5.times do |i|
        puts i
      end

      j = 0
      while j < 5
        puts j
        j += 1
      end
    `
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      x = 15
      if x > 10
        puts "x is greater than 10"
      else
        puts "x is 10 or less"
      end
    `
  },
  {
    title: 'Exception Handling',
    description: 'Exception handling is used to handle errors gracefully.',
    content: `
      begin
        result = 10 / 0
      rescue ZeroDivisionError
        puts "Cannot divide by zero"
      ensure
        puts "This will always execute"
      end
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      Ruby is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Building server-side web applications with Ruby on Rails (Web Development).',
      'Writing scripts to automate tasks (Scripting).',
      'Performing data analysis and processing tasks (Data Processing).',
      'Creating rapid prototypes (Prototyping).'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      Ruby was created by Yukihiro "Matz" Matsumoto and first released in 1995. It was designed to be a simple and productive language that emphasizes human readability.

      Over the years, Ruby has evolved significantly, with new versions introducing features such as garbage collection, just-in-time compilation, and improved performance. The language is developed and maintained by a large and active community.

      Today, Ruby is widely used in web development and has a strong presence in the developer community.
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
      name = "stranger"  # Declare your first variable
      puts "Hi, #{name}!"  # ...and use it!
      print "Current count:"
      (0..10).each do |i|  # Loop over a range from 0 to 10
        print " #{i}"
      end
    `
  },
  {
    tab: 'Asynchronous',
    code: `
      start = Time.now
      threads = []

      10.times do |i|
        threads << Thread.new do
          sleep(3 - i * 0.3)
          puts "Countdown: #{i + 1} after #{Time.now - start}s"
        end
      end

      threads.each(&:join)
      puts "Liftoff!"
    `
  },
  {
    tab: 'Object-oriented',
    code: `
      class Person
        def initialize(name)
          @name = name
        end

        def greet
          raise NotImplementedError, "Abstract method 'greet' must be implemented"
        end
      end

      module FoodConsumer
        def eat
          raise NotImplementedError, "Method 'eat' must be implemented"
        end

        def pay(amount)
          puts "Delicious! Here's #{amount} bucks!"
        end
      end

      class RestaurantCustomer < Person
        include FoodConsumer

        def initialize(name, dish)
          super(name)
          @dish = dish
        end

        def order
          puts "#{@dish}, please!"
        end

        def eat
          puts "*Eats #{@dish}*"
        end

        def greet
          puts "It's me, #{@name}."
        end
      end

      sam = RestaurantCustomer.new("Sam", "Mixed salad")
      sam.greet  # An implementation of an abstract function
      sam.order  # A member function
      sam.eat  # An implementation of an interface function
      sam.pay(10)  # A default implementation in an interface
    `
  },
  {
    tab: 'Functional',
    code: `
      Message = Struct.new(:sender, :body, :is_read)

      messages = [
        Message.new("Ma", "Hey! Where are you?"),
        Message.new("Adam", "Everything going according to plan today?"),
        Message.new("Ma", "Please reply. I've lost you!")
      ]

      # Who sent the most messages?
      frequent_sender = messages.group_by(&:sender).max_by { |_, msgs| msgs.size }.first
      puts frequent_sender  # Ma

      # Who are the senders?
      senders = messages.reject { |msg| msg.body.strip.empty? || msg.is_read }.map(&:sender).uniq.sort
      puts senders.join(", ")  # Adam, Ma
    `
  },
  {
    tab: 'Ideal for tests',
    code: `
      # spec/example_spec.rb
      require 'rspec'

      def sum(a, b)
        a + b
      end

      def setup
        # Setup code here
      end

      def compute
        true
      end

      RSpec.describe 'Example' do
        it 'tests sum' do
          expect(sum(1, 41)).to eq(42)
        end

        it 'tests computation' do
          setup
          expect { compute }.not_to raise_error
        end
      end
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is Ruby?',
    answer: 'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity.',
  },
  {
    id: 2,
    question: 'Is Ruby hard to learn?',
    answer: 'Ruby is well-suited for beginners as it has a simple syntax and is easy to learn and use.',
  },
  {
    id: 3,
    question: 'What are the main uses of Ruby?',
    answer: 'Ruby is used in web development, scripting, data processing, and prototyping.',
  },
  {
    id: 4,
    question: 'What are some popular Ruby libraries and frameworks?',
    answer: 'Popular Ruby libraries and frameworks include Ruby on Rails, Sinatra, and RSpec.',
  },
  {
    id: 5,
    question: 'What is the difference between Ruby and Python?',
    answer: 'Ruby and Python are both high-level, interpreted languages, but they have different design philosophies and syntax.',
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
        <h3>Why Ruby?</h3>
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
