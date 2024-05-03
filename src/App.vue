<template>
  <div class="flex justify-center items-center h-screen">
    <SidebarMenu />
    <RecorderControl />
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue';
import RecorderControl from './RecorderControl.vue';
</script>