<template>
    <div>
        <h1 class="flex items-center text-2xl">This meeting has been going on for {{ timeDisplay }}
            <component 
                :is="isPaused ? PlayIcon : PauseIcon"
                @click="togglePause" 
                class="hover:scale-125 duration-200 cursor-pointer h-9 w-9 ml-5">
            </component>
            <StopIcon 
                @click="stopTimer" 
                class="hover:scale-125 duration-200 cursor-pointer h-9 w-9 ml-3">
            </StopIcon>
        </h1>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import PauseIcon from '@/assets/icons/circle-pause-solid.svg';
import PlayIcon from '@/assets/icons/circle-play-solid.svg';
import StopIcon from '@/assets/icons/circle-stop-solid.svg';

const props = defineProps<{ isPaused: Boolean }>();

const emit = defineEmits<{
    'paused': []
    'stopped': []
}>();

const elapsed = ref(0);
let intervalId: number | undefined = undefined;

const timeDisplay = computed(() => {
    const seconds = Math.floor(elapsed.value / 1000) % 60;
    const minutes = Math.floor(elapsed.value / 60000) % 60;
    const hours = Math.floor(elapsed.value / 3600000);
    // Format time string to 'HH:MM:SS' using string manipulation and padding methods
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

watch(() => props.isPaused, (newVal) => {
    if (newVal) {
        clearInterval(intervalId);
        intervalId = undefined;
    } else {
        startTimer();
    }
}, { immediate: true });

function startTimer() {
if (!intervalId) {
    intervalId = setInterval(() => {
    elapsed.value += 1000;
    }, 1000);
}
}

function togglePause() {
    emit('paused');
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = undefined;
    elapsed.value = 0;
    emit('stopped');
}

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>