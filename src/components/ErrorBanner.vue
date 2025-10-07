<script setup>
const props = defineProps({ message: { type: String, default: 'Something went wrong.' }});
</script>


<template>
  <div
    class="error bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
    role="alert"
  >
    <svg
      class="h-5 w-5 flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
    </svg>

    <p class="text-sm">
      <strong class="font-semibold">Error:</strong> {{ message }}
    </p>
  </div>
</template>





