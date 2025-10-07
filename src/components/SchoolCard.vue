<script setup>
const props = defineProps({
  school: { type: Object, required: true },
});
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto border border-gray-200 dark:border-gray-700"
    role="article"
  >
    <div class="mb-5 w-full h-52 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm">
      <img
        v-if="school.logo_url || school.logo"
        :src="school.logo_url || school.logo"
        :alt="school.school_name"
        loading="lazy"
        class="object-cover w-full h-full"
      />
      <div v-else class="text-gray-400 text-sm font-medium">No image</div>
    </div>

    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {{ school.school_name }}
        <span
          v-if="school.short_school_name"
          class="block text-sm text-gray-500 mt-1 dark:text-gray-400"
        >
          ({{ school.short_school_name }})
        </span>
      </h2>

      <p class="text-gray-600 dark:text-gray-300 text-sm flex flex-wrap gap-1">
        <span v-if="school.city_name" class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
          {{ school.city_name }}
        </span>
        <span v-if="school.state_name" class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
          {{ school.state_name }}
        </span>
      </p>

      <p v-if="school.total_fund_raised" class="text-gray-800 dark:text-gray-200 font-semibold">
        Raised: <span class="text-green-600 dark:text-green-400">${{ Number(school.total_fund_raised).toLocaleString() }}</span>
        <span v-if="school.top_goal" class="text-gray-500 dark:text-gray-400">
          / ${{ Number(school.top_goal).toLocaleString() }}
        </span>
      </p>

      <p v-if="school.raising_money_purpose" class="text-gray-700 dark:text-gray-300 text-sm">
        {{ school.raising_money_purpose }}
      </p>

      <a
        v-if="school.public_page_url"
        :href="school.public_page_url"
        target="_blank"
        rel="noopener"
        class="inline-block w-full text-center mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl px-5 py-3 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        View Campaign
      </a>
    </div>
  </div>
</template>



