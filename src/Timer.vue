<template>
    <div>
        <h1 class="flex items-center text-2xl"> {{ props.message + timeDisplay }}
            <component 
                :is="isPaused ? PlayIcon : PauseIcon"
                @click="togglePause" 
                class="hover:scale-125 duration-200 cursor-pointer h-9 w-9 ml-5"/>
            <StopIcon 
                @click="stopTimer" 
                class="hover:scale-125 duration-200 cursor-pointer h-9 w-9 ml-3"/>
        </h1>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import PauseIcon from '@/assets/icons/circle-pause-solid.svg';
import PlayIcon from '@/assets/icons/circle-play-solid.svg';
import StopIcon from '@/assets/icons/circle-stop-solid.svg';

const props = defineProps<{ message: string }>();

const emit = defineEmits<{ 'timer-stopped': [] }>();

const isPaused = ref(false);
const intervalId = ref<number | null>(null);
const elapsedTime = ref(0);

const timeDisplay = computed(() => {
  const hours = Math.floor(elapsedTime.value / 3600);
  const minutes = Math.floor((elapsedTime.value % 3600) / 60);
  const seconds = elapsedTime.value % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

function startTimer() {
    // setInterval is a browser API that allows functions to execute repeatedly at the given interval
  intervalId.value = window.setInterval(() => {
    if (!isPaused.value) {
      elapsedTime.value++;
    }
  }, 1000);
}

function togglePause() {
  isPaused.value = !isPaused.value;
}

function stopTimer() {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
    elapsedTime.value = 0;
    isPaused.value = false;
    emit('timer-stopped');
  }
}

startTimer();

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>