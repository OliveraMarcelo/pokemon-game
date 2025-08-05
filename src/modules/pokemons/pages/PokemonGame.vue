<template>
    <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl"> Espere por favor</h1>
        <h3 class="animate-pulse">Cagando pokemons</h3>
    </section>
    <section class="flex flex-col justify-center items-center w-screen h-screen" v-else>
        <h1 class="text-3xl m-2"> Quien es este pokemon ? </h1>
        <button v-if="gameStatus!==GameStatus.Playing" type="button" class="bg-blue-500" @click="getNextOptions(4)">Reintentar</button>

        <!-- Pokemon picture -->
        <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus!==GameStatus.Playing"/>
        <!-- Pokemon options -->
        <PokemonOptions :options="options" @selected-option="checkAnswer" :block-selection="gameStatus !== GameStatus.Playing" :correct-answer="randomPokemon.id"/>

    </section>
</template>

<script setup  lang="ts" >
import PokemonPicture from "../components/PokemonPicture.vue"
import PokemonOptions from "../components/PokemonOptions.vue"
import  { usePokemonGame } from "../composables/usePokemonGame"
import { GameStatus } from "../interfaces";
const { isLoading,randomPokemon, checkAnswer, pokemonsOptions:options,gameStatus,getNextOptions} = usePokemonGame()

</script>

<style scoped>
button{
    @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all;
}
</style>