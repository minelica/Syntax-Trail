<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section copyright">
        <p>© 2025 Syntax Trail. All rights reserved.</p>
      </div>
      <div class="footer-section quick-links">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/javascript">Languages</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact">
        <p>Contact us at: <a href="mailto:minelam.dev@gmail.com">minelam.dev@gmail.com</a></p>
      </div>
      <div class="footer-section social-media">
        <a href="https://github.com/minelica" target="_blank">GitHub</a>
        <a href="https://de.linkedin.com/in/minela-masinovic-82a7452a8" target="_blank">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a202c;
  color: #e2e8f0;
  padding: 2rem;
  text-align: center;
  padding: 1rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin: 0 1rem;
}

.quick-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-links li {
  margin: 0.5rem 0;
}

.quick-links a {
  color: #e2e8f0;
  text-decoration: underline !important;
}

.quick-links a:hover {
  text-decoration: underline;
}

.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-media a {
  margin: 0.5rem 0;
  color: #e2e8f0;
  text-decoration: underline !important;
}

.contact a {
  color: #e2e8f0;
  text-decoration: underline !important;
}
</style>
s
