<template>
  <div class="flex justify-center items-center h-screen">
    <Sidebar />
    <Recorder class="mx-auto" />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import Recorder from './Recorder.vue';
</script>