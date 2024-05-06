<template>
  <div>
    <div
      v-if="!props.isRecordingMeeting"
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
import MicIcon from '@/assets/icons/microphone-solid.svg';
import TimerControl from './TimerControl.vue';

const props = defineProps<{ isRecordingMeeting: boolean }>();
const emit = defineEmits<{ 'recording-status': [boolean] }>();
const timerMessage = "This meeting has been going on for ";

function startRecordingMeeting(): void {
  emit('recording-status', true);
}

function stopRecordingMeeting(): void {
  emit('recording-status', false);
}
</script>