<script setup>
import { ref, computed, watch, onMounted } from "vue";
import SearchBar from "./SearchBar.vue";
import SchoolCard from "./SchoolCard.vue";
import Loader from "./Loader.vue";
import ErrorBanner from "./ErrorBanner.vue";
import { fetchSchools } from "../services/schoolsService";

const searchTerm = ref("");
const schools = ref([]);
const loading = ref(false);
const error = ref(false);
const errorMessage = ref("");
const page = ref(1);
const pageSize = 20; 
const totalPages = ref(null);

const canLoadMore = computed(() => totalPages.value && page.value < totalPages.value);

async function load({ reset = false } = {}) {
  loading.value = true;
  error.value = false;
  errorMessage.value = "";

  try {
    const data = await fetchSchools({
      search: searchTerm.value || "",
      page: page.value,
      pageSize,
    });

    const list = Array.isArray(data?.school_list) ? data.school_list : [];

    if (reset) schools.value = list;
    else schools.value.push(...list);

    totalPages.value = data?.page_info?.total_page || page.value;
  } catch (err) {
    error.value = true;
    errorMessage.value = err?.message || "Unable to fetch schools. Please try again.";
    schools.value = [];
  } finally {
    loading.value = false;
  }
}

function loadMore() {
  page.value += 1;
  load();
}

watch(searchTerm, () => {
  page.value = 1;
  load({ reset: true });
});

onMounted(() => load({ reset: true }));
</script>

<template>
  <section class="max-w-7xl mx-auto p-4 sm:p-6">
    <div class="mb-6">
      <SearchBar v-model="searchTerm" />
    </div>

    <div v-if="error" class="mb-6">
      <ErrorBanner :message="errorMessage" />
    </div>

    <div v-if="loading" class="flex justify-center py-10">
      <Loader />
    </div>

    <div v-if="!loading && !error">
      <div v-if="schools.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SchoolCard
          v-for="school in schools"
          :key="school.id"
          :school="school"
        />
      </div>

      <div v-else class="text-center py-10 text-gray-500 dark:text-gray-400">
        <p>
          No schools found for
          <strong class="text-gray-700 dark:text-gray-200">{{ searchTerm }}</strong>
        </p>
      </div>
    </div>

    <div v-if="canLoadMore && !loading && !error" class="flex justify-center mt-8">
      <button
        @click="loadMore"
        class="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
      >
        Load More
      </button>
    </div>
  </section>
</template>
