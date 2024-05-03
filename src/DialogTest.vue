<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 class="text-lg font-semibold mb-4">
        Dialog Title
      </h2>
      <p class="mb-6">
        This is an example dialog using Tailwind CSS in Vue 3 with the Composition API and script setup.
      </p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        @click="close"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const modelValue = defineModel<boolean>({required: true, default: false});

function close() {
  modelValue.value = false;
}
</script>
