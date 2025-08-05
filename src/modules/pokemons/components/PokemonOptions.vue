<template>
    <section class="mt-5 flex flex-col">
        <button v-for="option in options" @click="$emit('selectedOption',option.id)" class="w-full" :key="option.id">
            <li class="flex justify-center items-center">
                <span class="text-lg">{{ option.name }}</span>
                <PokemonPicture :pokemon-id="option.id" />
            </li>

        </button>
    </section>
</template>

<script setup lang="ts">
import type { Pokemon } from "../interfaces";
import { computed } from "vue";
interface Props {
    options: Pokemon[];
}
const props = defineProps<Props>();
defineEmits<{
    selectedOption: [id: number];
}>();   
</script>

<style scoped>
li{
    @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
</style>