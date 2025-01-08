<script setup lang="ts">
import '@/assets/main.css'

const title = 'MATLAB'
const description = [
  'MATLAB is a high-level programming language and interactive environment used for numerical computation, visualization, and programming. It was developed by MathWorks and first released in 1984.',
  'MATLAB is widely used in academia and industry for tasks such as data analysis, signal processing, image processing, control systems, and more. It is known for its extensive library of built-in functions and toolboxes.',
  'MATLAB code can be integrated with other languages, including C, C++, Java, and Python, making it a versatile tool for various applications.'
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
    description: 'Variables in MATLAB are defined using the assignment operator `=`.',
    content: `
      x = 10;
      y = 20;
      z = 'Hello, World!';
    `
  },
  {
    title: 'Functions',
    description: 'Functions in MATLAB are defined using the `function` keyword.',
    content: `
      function result = add(a, b)
        result = a + b;
      end

      function greet()
        disp('Hello, World!');
      end
    `
  },
  {
    title: 'Matrices',
    description: 'Matrices are a fundamental data type in MATLAB and can be defined using square brackets.',
    content: `
      A = [1, 2, 3; 4, 5, 6; 7, 8, 9];
      B = [10; 20; 30];
    `
  },
  {
    title: 'Scripts and Functions',
    description: 'MATLAB supports both scripts and functions. Scripts are files containing a sequence of MATLAB commands, while functions are defined using the `function` keyword.',
    content: `
      % Script example
      x = 10;
      y = 20;
      z = add(x, y);
      disp(z);

      % Function example
      function result = add(a, b)
        result = a + b;
      end
    `
  }
]

const languageElementsContent = [
  {
    title: 'Loops',
    description: 'Loops are used to repeat a block of code. MATLAB has `for` and `while` loops.',
    content: `
      for i = 1:5
        disp(i);
      end

      j = 0;
      while j < 5
        disp(j);
        j = j + 1;
      end
    `
  },
  {
    title: 'Conditions',
    description: 'Conditions are used to perform different actions based on different conditions.',
    content: `
      x = 15;
      if x > 10
        disp('x is greater than 10');
      else
        disp('x is 10 or less');
      end
    `
  },
  {
    title: 'Plotting',
    description: 'MATLAB is known for its powerful plotting capabilities.',
    content: `
      x = linspace(0, 2*pi, 100);
      y = sin(x);
      plot(x, y);
      title('Sine Wave');
      xlabel('x');
      ylabel('sin(x)');
    `
  }
]

const sections = [
  {
    id: 'usage',
    title: 'Usage',
    content: `
      MATLAB is a versatile programming language used in various domains. Here are some common use cases:
    `,
    bulletPoints: [
      'Data manipulation, statistical analysis, and visualization (Data Analysis).',
      'Analyzing and processing signals (Signal Processing).',
      'Image analysis and computer vision (Image Processing).',
      'Designing and simulating control systems (Control Systems).',
      'Developing machine learning models and algorithms (Machine Learning).'
    ]
  },
  {
    id: 'history',
    title: 'History',
    content: `
      MATLAB was developed by Cleve Moler, a professor of computer science, in the late 1970s. It was designed to provide easy access to matrix software developed by the LINPACK and EISPACK projects.

      In 1984, MATLAB was commercialized by MathWorks, founded by Moler, Jack Little, and Steve Bangert. Since then, MATLAB has evolved significantly, with the addition of numerous toolboxes and features.

      Today, MATLAB is widely used in academia and industry for a wide range of applications, from data analysis to control systems design.
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
      % Simple example demonstrating variable declaration and a loop
      name = 'stranger';  % Declare your first variable
      disp(['Hi, ', name, '!']);  % ...and use it!
      disp('Current count:');
      for i = 0:10  % Loop over a range from 0 to 10
        disp(i);
      end
    `
  },
  {
    tab: 'Data Analysis',
    code: `
      % Example demonstrating data analysis with MATLAB
      data = randn(100, 1);  % Generate random data
      mean_data = mean(data);  % Calculate mean
      std_data = std(data);  % Calculate standard deviation
      disp(['Mean: ', num2str(mean_data)]);
      disp(['Standard Deviation: ', num2str(std_data)]);
    `
  },
  {
    tab: 'Signal Processing',
    code: `
      % Example demonstrating signal processing with MATLAB
      t = 0:0.01:1;  % Time vector
      x = sin(2*pi*10*t);  % Generate a sine wave
      y = fft(x);  % Compute the Fourier transform
      plot(abs(y));  % Plot the magnitude of the Fourier transform
      title('Magnitude of Fourier Transform');
      xlabel('Frequency (Hz)');
      ylabel('Magnitude');
    `
  },
  {
    tab: 'Image Processing',
    code: `
      % Example demonstrating image processing with MATLAB
      img = imread('peppers.png');  % Read an image
      gray_img = rgb2gray(img);  % Convert to grayscale
      edge_img = edge(gray_img, 'Canny');  % Detect edges
      imshow(edge_img);  % Display the edge-detected image
      title('Edge Detection');
    `
  },
  {
    tab: 'Control Systems',
    code: `
      % Example demonstrating control systems design with MATLAB
      s = tf('s');  % Define the Laplace variable
      G = 1/(s^2 + 10*s + 20);  % Define a transfer function
      step(G);  % Plot the step response
      title('Step Response');
      xlabel('Time (seconds)');
      ylabel('Amplitude');
    `
  }
]

const faqs = [
  {
    id: 1,
    question: 'What is MATLAB?',
    answer: 'MATLAB is a high-level programming language and interactive environment used for numerical computation, visualization, and programming.',
  },
  {
    id: 2,
    question: 'Is MATLAB hard to learn?',
    answer: 'MATLAB is well-suited for beginners as it has a simple syntax and is easy to learn and use, especially if you are already familiar with mathematical concepts.',
  },
  {
    id: 3,
    question: 'What are the main uses of MATLAB?',
    answer: 'MATLAB is used for data analysis, signal processing, image processing, control systems, and machine learning.',
  },
  {
    id: 4,
    question: 'What are some popular MATLAB toolboxes?',
    answer: 'Popular MATLAB toolboxes include the Signal Processing Toolbox, Image Processing Toolbox, Control System Toolbox, and Statistics and Machine Learning Toolbox.',
  },
  {
    id: 5,
    question: 'What is the difference between MATLAB and Python?',
    answer: 'MATLAB is designed specifically for numerical computation and data analysis, while Python is a general-purpose programming language with a wide range of applications. Both languages are widely used in scientific computing.',
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
        <h3>Why MATLAB?</h3>
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
