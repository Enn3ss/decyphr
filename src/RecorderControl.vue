<template>
  <div>
    <div
      v-if="!isRecordingMeeting"
      class="flex items-center"
    >
      <h1 class="text-2xl">
        Let's record this meeting
      </h1>
      <MicIcon
        class="hover:scale-125 duration-200 cursor-pointer h-9 w-9 ml-5"
        @click="startRecordingMeeting"
      />
    </div>
    <div v-else>
      <TimerControl
        :message="timerMessage"
        @timer-stopped="stopRecordingMeeting"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MicIcon from '@/assets/icons/microphone-solid.svg';
import TimerControl from './TimerControl.vue';

const isRecordingMeeting = ref(false);
const timerMessage = "This meeting has been going on for ";

function startRecordingMeeting() {
  isRecordingMeeting.value = true;
}

function stopRecordingMeeting() {
  isRecordingMeeting.value = false;
}
</script>