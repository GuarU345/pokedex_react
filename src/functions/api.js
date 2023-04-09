import axios from "axios"
export const getPokemons = async() => {
    const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = resp.data
    const pokemons = data.results
    const pokemonData = await Promise.all(pokemons.map(async poke => {
      const resp_image = await axios.get(poke.url)
      const more_data = resp_image.data
      return { 
        ...poke, 
        image: more_data.sprites.front_default,
        types: more_data.types[0],
        abilities: more_data.abilities
    }
    }))
    return pokemonData
  }