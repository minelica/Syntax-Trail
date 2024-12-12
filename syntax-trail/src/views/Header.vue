<script setup lang="ts"></script>

<template>
  <header>
    <h1>Welcome to Syntax Trail</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
