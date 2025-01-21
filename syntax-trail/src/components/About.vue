<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <div class="language-page">
    <header class="hero">
      <h1>About Syntax Trail</h1>
    </header>

    <br>
    <br>

    <!-- Introduction Section -->
    <header class="hero">
      <h2 class="h2_about">Introduction</h2>
      <p>Syntax Trail is a platform dedicated to making programming knowledge accessible to everyone. It offers
        resources
        and tutorials for some of the most essential programming languages, helping both beginners and experienced
        developers expand their skill sets.</p>
    </header>

    <br>

    <!-- Mission and Goals Section -->
    <header class="hero">
      <h2 class="h2_about">Mission and Goals</h2>
      <p>The mission of Syntax Trail is to create a centralized hub for learning programming languages. By providing
        clear, structured content, it aims to simplify the learning process and inspire individuals to unlock their
        potential in software development. The platform strives to make coding an engaging and empowering experience for
        all users.</p>
    </header>

    <br>

    <!-- Origin of the Platform -->
    <header class="hero">
      <h2 class="h2_about">Origin of the Platform</h2>
      <p>Syntax Trail was developed by <span class="highlight">Minela Mašinović</span>, a 20-year-old Business
        Informatics
        student in Germany with a
        passion for software development. This project was born out of a desire to improve frontend development skills
        while exploring various programming languages in a structured way. </p>
      <br>
      <p>It is <span class="highlight">Minela's</span> first published project and was entirely self-developed. The idea
        emerged from the realization
        that many learners struggle to find a comprehensive and organized resource for understanding programming
        languages. Syntax Trail was created to fill that gap and serve as a valuable tool for anyone starting their
        coding
        journey.
      </p>
    </header>

    <br>

    <!-- Feedback and Future Development -->
    <header class="hero">
      <h2 class="h2_about">Feedback and Future Development</h2>
      <p>This platform is a continuous learning journey and a reflection of enthusiasm for technology and programming.
        Feedback, suggestions, and ideas for improvement are highly appreciated to make Syntax Trail even more useful
        and
        effective.</p>
    </header>

    <br>

    <div class="rate">
      <el-rate v-model="value" allow-half />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.h2_about {
  margin-top: 10px;
  text-align: center;
}

.highlight {
  font-weight: bold;
  color: #63b3ed;
}

.rate {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
