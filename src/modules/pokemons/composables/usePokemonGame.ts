import { computed, onMounted, ref } from "vue"
import { type Pokemon, type PokemonListResponse, GameStatus} from "../interfaces"
import { pokemonApi } from "../api/pokemonApi";
import confetti from "canvas-confetti";
export const usePokemonGame = ()=>{
const gameStatus = ref<GameStatus>(GameStatus.Playing);
const pokemons = ref<Pokemon[]>([])
const pokemonsOptions = ref<Pokemon[]>([])
const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex];
})
//propiedad computada cuando estoy cargando
const isLoading = computed(()=>pokemons.value.length === 0);

const getPokemons =async ():Promise<Pokemon[]> =>{
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    const pokemonsArray = response.data.results.map(pokemon =>{
        const urlParts = pokemon.url.split('/');
        const id = urlParts.length >= 2 ? urlParts[urlParts.length - 2] : 0
        return {
            name : pokemon.name,
            id : +id
        }
    })
    console.log(response.data.results)
    return pokemonsArray.sort(()=> Math.random() - 0.5 );
};
const getNextOptions = ( howMany: number = 4)=>{
    gameStatus.value = GameStatus.Playing
    pokemonsOptions.value= pokemons.value.slice(0,howMany)
    pokemons.value= pokemons.value.slice(howMany)
}
const checkAnswer = (id: number) => {
    if (id === randomPokemon.value.id) {
        gameStatus.value = GameStatus.Won;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    else {
        gameStatus.value = GameStatus.Lost;
    }
}
//mezclemos de manera aleatorioa
    onMounted(async()=>{
        /* 
        simulamos un tiempo de carga
        await new Promise(resolve =>setTimeout(resolve,1000));
         */
        pokemons.value = await getPokemons();
        getNextOptions()
        console.log(pokemons.value)
        console.log(pokemonsOptions.value)

    })
return{
    gameStatus,
    isLoading,
    pokemonsOptions,
    randomPokemon,
    //methods
    pokemons,
    checkAnswer,
    getNextOptions

}
}