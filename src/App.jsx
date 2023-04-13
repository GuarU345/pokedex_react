import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css'
import Pokemons from './components/Pokemons'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonDetails from './components/PokemonDetails';

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pokemons></Pokemons>}></Route>
      <Route path='/pokemondetails' element={<PokemonDetails></PokemonDetails>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
