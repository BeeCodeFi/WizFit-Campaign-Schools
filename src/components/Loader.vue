
<template>
  <div class="loader flex flex-col items-center justify-center py-10">
    <svg
      class="animate-spin h-8 w-8 text-green-600 dark:text-green-400 mb-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
      ></path>
    </svg>
    <span class="text-gray-600 dark:text-gray-300 text-sm font-medium">Loading…</span>
  </div>
</template>



