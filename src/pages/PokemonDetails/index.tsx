import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Pokemon } from "pokenode-ts";
import { fetchPokemonByName } from "../../services/pokemonService";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (!pokemonName) return;

    (async () => {
      const pokemon = await fetchPokemonByName(pokemonName);

      setPokemon(pokemon);
    })();
  }, [pokemonName]);

  return <div>Details</div>;
};

export default PokemonDetails;
