import { useState } from 'react'
import './App.css'
import Pokemons from './components/Pokemons'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <h1 style={{textAlign:'center',color:'white'}}>POKEDEX</h1>
      <Pokemons/>
    </div>
  )
}

export default App
