<template>
    <section class="mt-5 flex flex-col">
        <button v-for="option in options" @click="$emit('selectedOption',option.id)" :class="['capitalize disabled:shadow-none disabled:bg-gray-100', {
            'correct': option.id == correctAnswer && blockSelection
            ,'incorrect': option.id != correctAnswer && blockSelection
        }]" :key="option.id" :disabled="blockSelection">
           {{ option.name }}

        </button>
    </section>
</template>

<script setup lang="ts">
import type { Pokemon } from "../interfaces";
import { computed } from "vue";
interface Props {
    options: Pokemon[];
    blockSelection?: boolean;
    correctAnswer : number;
}
const props = defineProps<Props>();
defineEmits<{
    selectedOption: [id: number];
}>();   
</script>

<style scoped>
button{
    @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all;
}
.correct{
    @apply bg-green-500 text-white;
}
.incorrect{
    @apply bg-red-500 text-white;
}
</style>