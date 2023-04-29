import React, { useState, useEffect } from "react";
import { getPokemonDetails } from "../functions/api";

const PokemonDetails = () => {
  const [pokemondetails, setPokemonDetails] = useState([]);

  const selectedPokemon = JSON.parse(localStorage.getItem("selectedPokemon"));
  const pokemon_name = selectedPokemon.name;
  const url_pokemon = selectedPokemon.url;

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonDetails(pokemon_name, url_pokemon);
      setPokemonDetails(data);
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <section className="pokemon-details">
        <article className={`pokemon-card-details ${pokemondetails.type}`}>
          <header className="pokemon-header-details">
            <h2>{pokemondetails.name}</h2>
            <img
              className="img-fluid w-50"
              src={pokemondetails.image}
              alt={`Picture of ${pokemondetails.name}`}
            />
          </header>
          <div className="pkd-information">
            <h3>Information of Pokemon</h3>
            <dl>
              <dt>Type:</dt>
              <dd className="pkd-type">{pokemondetails.type}</dd>
            </dl>
            <h3>Principal Attacks</h3>
            <ul className="pkd-attack-list">
              <li className="pkd-attack">{pokemondetails.move1}</li>
              <li className="pkd-attack">{pokemondetails.move2}</li>
              <li className="pkd-attack">{pokemondetails.move3}</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default PokemonDetails;
