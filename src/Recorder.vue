<template>
    <div>
      <div v-if="!isRecording" class="flex items-center">
        <h1 class="text-2xl">Let's record this meeting</h1>
        <MicIcon
          @click="startRecording"
          class="hover:scale-125 duration-200 cursor-pointer h-9 w-9 ml-5"
        />
      </div>
      <div v-else>
        <Stopwatch
          :isPaused="isPaused"
          @stopped="stopRecording"
          @paused="togglePause"
        />
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import MicIcon from '@/assets/icons/microphone-solid.svg';
import Stopwatch from './Stopwatch.vue';

const isRecording = ref(false);
const isPaused = ref(true);

function startRecording() {
    isRecording.value = true;
    isPaused.value = false; // Start the timer automatically
}

function stopRecording() {
    isRecording.value = false;
    isPaused.value = true; // Reset pause state
}

function togglePause() {
    isPaused.value = !isPaused.value;
}
</script>