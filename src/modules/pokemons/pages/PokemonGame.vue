<template>
    <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl"> Espere por favor</h1>
        <h3 class="animate-pulse">Cagando pokemons</h3>
    </section>
    <section class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl m-2"> Quien es este pokemon ? </h1>
        <!-- Pokemon picture -->
        <PokemonPicture/>
        <!-- Pokemon options -->
        <PokemonOptions/>

    </section>
</template>

<script setup>
import PokemonPicture from "../components/PokemonPicture.vue"
import PokemonOptions from "../components/PokemonOptions.vue"
import  { usePokemonGame } from "../composables/usePokemonGame.ts"
const { gameStatus } = usePokemonGame()

</script>

<style lang="scss" scoped>

</style>