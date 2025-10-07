<script setup>
import SchoolList from './components/SchoolList.vue';
</script>

<template>
  <div id="app" class="app-shell min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <header class="header bg-white dark:bg-gray-800 shadow-md py-6 px-4 sm:px-6">
      <h1 class="text-3xl font-bold mb-1">WizFit — Campaign Schools</h1>
      <p class="subtitle text-gray-600 dark:text-gray-300 text-sm">
        Find participating schools — search dynamically
      </p>
    </header>

    <main class="main flex-1 py-6 px-4 sm:px-6">
      <SchoolList />
    </main>

    <footer class="footer bg-white dark:bg-gray-800 shadow-inner py-4 px-4 sm:px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
      <small>WizFit Challenge — frontend demo</small>
    </footer>
  </div>
</template>



