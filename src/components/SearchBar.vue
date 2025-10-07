<script setup>
  import { ref, watch } from 'vue';
  import debounce from 'lodash.debounce';
  import { defineEmits, defineProps } from 'vue';
    
  const props = defineProps({
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: 'Search schools by name...' },
    debounceMs: { type: Number, default: 500 },
  });
    
  const emit = defineEmits(['update:modelValue']);
    
  const term = ref(props.modelValue);
    
  watch(() => props.modelValue, (v) => {
    term.value = v;
  });
    
  const emitValue = debounce((val) => {
    emit('update:modelValue', val);
  }, props.debounceMs);
    
  function onInput() {
    emitValue(term.value.trim());
  }
    
  function clear() {
    term.value = '';
    emit('update:modelValue', '');
  }
</script>


<template>
  <div class="searchbar flex items-center max-w-md mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full shadow-sm px-4 py-2 space-x-2">
    <input
      v-model="term"
      @input="onInput"
      :placeholder="placeholder"
      aria-label="Search schools"
      class="flex-1 bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm"
    />

    <button
      v-if="term"
      @click="clear"
      aria-label="Clear search"
      class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
    >
      ✕
    </button>
  </div>
</template>




