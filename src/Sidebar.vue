<template>
    <div class="flex h-full">
        <div :class="`bg-navy-700 text-pink w-64 py-7 px-2 absolute inset-y-0 left-0 transform ${!isOpen ? '-translate-x-full' : ''} transition duration-200 ease-in-out flex flex-col`">
            <ul class="flex-grow space-y-6">
                <li><a></a></li>
                <li><a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-navy-500">Home</a></li>
                <li><a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-navy-500">Collection</a></li>
                <li><a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-navy-500">Settings</a></li>
            </ul>
            <h1 class="text-3xl font-semibold text-center mt-auto">DECYPHR</h1>
        </div>
        <MenuIcon @click="toggleSidebar" class="text-pink hover:bg-navy-700 p-2 m-2 absolute h-10 w-10 top-0 left-0"></MenuIcon>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import MenuIcon from '@/assets/icons/bars-solid.svg'
import HomeIcon from '@/assets/icons/house-chimney-solid.svg'
import FolderIcon from '@/assets/icons/folder-closed-solid.svg'
import SettingsIcon from '@/assets/icons/gear-solid.svg'

const isOpen = ref(false);

function toggleSidebar(): void {
    isOpen.value = !isOpen.value;
}
</script>