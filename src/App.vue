<template>
  <div class="flex justify-center items-center h-screen">
    <SidebarMenu 
      :is-recording-meeting="isRecordingMeeting"
    />
    <RecorderControl
      :is-recording-meeting="isRecordingMeeting"
      @recording-status="setRecordingStatus"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SidebarMenu from './SidebarMenu.vue';
import RecorderControl from './RecorderControl.vue';

const isRecordingMeeting = ref(false);

function setRecordingStatus(status: boolean): void {
  isRecordingMeeting.value = status;
}
</script>