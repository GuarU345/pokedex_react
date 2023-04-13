import axios from "axios"
export const getPokemons = async() => {
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    const data = resp.data
    const pokemons = data.results
    const pokemonData = await Promise.all(pokemons.map(async poke => {
      const resp_image = await axios.get(poke.url)
      const more_data = resp_image.data
      return { 
        ...poke, 
        image: more_data.sprites.front_default,
        types: more_data.types[0],
    }
    }))
    return pokemonData
  }

export const getPokemonDetails = async(name,url) => {
    const resp = await axios.get(url)
    const pokemon_details_data = resp.data
    console.log(pokemon_details_data)
    const selected_details_data = 
    {
      name:name,
      image:pokemon_details_data.sprites.other.home.front_default,
      type:pokemon_details_data.types[0].type.name,
      move1:pokemon_details_data.moves[0].move.name,
      move2:pokemon_details_data.moves[1].move.name,
      move3:pokemon_details_data.moves[2].move.name
    }
    return selected_details_data
}