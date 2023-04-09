import React, { useEffect, useState } from 'react'
import { getPokemons } from '../functions/api'

const Pokemons = () => {

    const [pokemon,setPokemon]=useState([])

    useEffect(()=>{
        const fetchPokemon = async() => {
            const data = await getPokemons()
            setPokemon(data)
        }
        fetchPokemon()
    },[])
    
  return (
    <div className='pokemon-container'>
        {pokemon.map(item => (
            <div className={`pokemon-card ${item.types.type.name}`} key={item.name}>
                <div className="card-header">
                    <h5>{item.name}</h5>
                </div>
                <div className="card-body">
                    <img className="pokemon-img" src={item.image}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Pokemons