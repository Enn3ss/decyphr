<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-navy-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 class="text-lg font-semibold mb-4">
        {{ props.title }}
      </h2>
      <p class="mb-6">
        {{ props.message }}
      </p>
      <button
        class="hover:bg-navy-500 text-black font-bold py-2 px-4 rounded"
        @click="close"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const props = defineProps<{ title: string, message: string }>();
const modelValue = defineModel<boolean>({required: true, default: false});

function close(): void {
  modelValue.value = false;
}
</script>