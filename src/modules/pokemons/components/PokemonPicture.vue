<template>
   <section >
    <img v-if="!showPokemon" class="brightness-0 h-[200px]" :src="pokemonImage">
    <img v-else class="h-[200px]" :src="pokemonImage">
   </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
    pokemonId: number;
    showPokemon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    showPokemon: false
});
const pokemonImage = computed(() => {
    return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`;
});
</script>

<style scoped>
img{
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>