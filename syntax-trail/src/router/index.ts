import { createRouter, createWebHistory } from 'vue-router';
//import Header from '@/views/Header.vue';
//import Footer from '@/views/Footer.vue';
//import Menu from '@/components/Menu.vue';
import Home from '@/components/Home.vue';

import JavaScript from '@/components/languages/JavaScript.vue';
import Python from '@/components/languages/Python.vue';
import Java from '@/components/languages/Java.vue';
import CPlusPlus from '@/components/languages/CPlusPlus.vue';
import CSharp from '@/components/languages/CSharp.vue';
import Ruby from '@/components/languages/Ruby.vue';
import PHP from '@/components/languages/PHP.vue';
import Swift from '@/components/languages/Swift.vue';
import Go from '@/components/languages/Go.vue';
import Rust from '@/components/languages/Rust.vue';
import SQL from '@/components/languages/SQL.vue';
import Kotlin from '@/components/languages/Kotlin.vue';
import TypeScript from '@/components/languages/TypeScript.vue';
import R from '@/components/languages/R.vue';
import ShellScript from '@/components/languages/ShellScript.vue';
import Matlab from '@/components/languages/Matlab.vue';
import Dart from '@/components/languages/Dart.vue';

import About from '@/components/About.vue';

import MainLayout from '@/components/MainLayout.vue';
//import path from 'path';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'javascript',
        component: JavaScript
      },
      {
        path: 'python',
        component: Python
      },
      {
        path: 'java',
        component: Java
      },
      {
        path: 'cplusplus',
        component: CPlusPlus
      },
      {
        path: 'csharp',
        component: CSharp
      },
      {
        path: 'ruby',
        component: Ruby
      },
      {
        path: 'php',
        component: PHP
      },
      {
        path: 'swift',
        component: Swift
      },
      {
        path: 'go',
        component: Go
      },
      {
        path: 'rust',
        component: Rust
      },
      {
        path: 'sql',
        component: SQL
      },
      {
        path: 'kotlin',
        component: Kotlin
      },
      {
        path: 'typescript',
        component: TypeScript
      },
      {
        path: 'r',
        component: R
      },
      {
        path: 'shellscript',
        component: ShellScript
      },
      {
        path: 'matlab',
        component: Matlab
      },
      {
        path: 'dart',
        component: Dart
      },
      {
        path: 'about',
        component: About
      }
    ]
  }
];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  export default router;
