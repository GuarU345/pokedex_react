import React, { useEffect, useState } from 'react'
import { getPokemons } from '../functions/api'
import { useNavigate } from 'react-router-dom'

const Pokemons = () => {

    const [pokemon,setPokemon]=useState([])

    const navigate = useNavigate()

    const handleClick = (name,url) => {
        navigate('/pokemondetails')
        localStorage.setItem("selectedPokemon",JSON.stringify({"name":name,"url":url}))
    }

    useEffect(()=>{
        const fetchPokemon = async() => {
            const data = await getPokemons()
            setPokemon(data)
        }
        fetchPokemon()
    },[])
    
  return (
    <>
    <h1 style={{textAlign:'center',color:'white'}}>POKEDEX</h1>
    <div className='pokemon-container'>
        {pokemon.map(item => (
            <div onClick={()=>handleClick(item.name,item.url)} className={`pokemon-card ${item.types.type.name}`} key={item.name}>
                <div className="card-header">
                    <h5>{item.name}</h5>
                </div>
                <div className="card-body">
                    <img className="pokemon-img" src={item.image}/>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Pokemons