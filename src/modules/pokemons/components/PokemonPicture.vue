<template>
   <section >
    <img :class=" showPokemon ? '' : 'brightness-0' " :src="pokemonImage" alt="" srcset="">
   </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
    pokemonId: number;
    showPokemon?: boolean;
}
const props = defineProps<Props>();
const pokemonImage = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`;
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