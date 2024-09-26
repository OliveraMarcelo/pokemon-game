import { computed, onMounted, ref } from "vue"
import { type Pokemon, type PokemonListResponse, GameStatus} from "../interfaces"
import { pokemonApi } from "../api/pokemonApi";

export const usePokemonGame = ()=>{
const gameStatus = ref<GameStatus>(GameStatus.Playing);
const pokemons = ref<Pokemon[]>([])
const pokemonsOptions = ref<Pokemon[]>([])

//propiedad computada cuando estoy cargando
const isLoading = computed(()=>pokemons.value.length === 0);

const getPokemons =async ():Promise<Pokemon[]> =>{
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    const pokemonsArray = response.data.results.map(pokemon =>{
        const urlParts = pokemon.url.split('/');
        const id = urlParts.at(-2) ?? 0
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
    //methods
    pokemons,

}
}