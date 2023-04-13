import React, { useState,useEffect} from 'react'
import {getPokemonDetails} from "../functions/api"

const PokemonDetails = () => {

  const [pokemondetails,setPokemonDetails] = useState([])

  const selectedPokemon = JSON.parse(localStorage.getItem("selectedPokemon"))
  const pokemon_name = selectedPokemon.name
  const url_pokemon = selectedPokemon.url

  useEffect(()=>{
    const fetchPokemon = async() => {
        const data = await getPokemonDetails(pokemon_name,url_pokemon)
        setPokemonDetails(data)
    }
    fetchPokemon()
  },[])

  return (
    <>
      <div className="pokemon-details">
          <div className={`pokemon-card-details ${pokemondetails.type}`}>
          <div className="pokemon-header-details">
            <h5>{pokemondetails.name}</h5>
            <img className='img-fluid w-50' src={pokemondetails.image}></img>
            <div className='pkd-information'>
              <h5 style={{color:'white'}}>Information of Pokemon</h5>
              <span>Type: {pokemondetails.type}</span>
              <h5 style={{color:'red'}}>Principal Atacks</h5>
              <span>attack 1: {pokemondetails.move1}</span>
              <span>attack 2: {pokemondetails.move2}</span>
              <span>attack 3: {pokemondetails.move3}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails