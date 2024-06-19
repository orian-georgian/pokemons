import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Image from "../../components/Image";
import Badge from "../../components/Badge";
import Divider from "../../components/Divider";

import { Pokemon } from "pokenode-ts";
import { fetchPokemonByName } from "../../services/pokemonService";
import { PokemonType } from "../../types";

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

  if (!pokemon) return null;

  const { name, sprites, weight, base_experience, moves, abilities } = pokemon;

  return (
    <main className="flex flex-col gap-10 max-w-7xl mx-auto flex py-12 px-5">
      <div className="flex gap-3 items-center">
        <h2 className="text-4xl font-bold capitalize">{name}</h2>
        <div className="border rounded-full bg-slate-200 ml-auto">
          <Image
            className="w-20 h-20"
            src={sprites?.front_default}
            alt={name}
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex-1 bg-sky-200 w-1/2 p-5 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Weight</h3>
          <Badge type={PokemonType.water}>{weight}</Badge>
        </div>
        <div className="flex-1 bg-yellow-200 w-1/2 p-5 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Height</h3>
          <Badge type={PokemonType.electric}>{weight}</Badge>
        </div>
        <div className="flex-1 bg-orange-200 w-full p-5 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Experience</h3>
          <Badge type={PokemonType.fire}>{base_experience}</Badge>
        </div>
        <div className="flex-3 bg-red-200 w-full p-5 rounded-lg">
          <h3 className="text-2xl font-semibold mb-3">Abilities</h3>
          {abilities.map(({ ability }) => (
            <Badge className="mr-5" type={PokemonType.fire} key={ability.name}>
              {ability.name}
            </Badge>
          ))}
        </div>
      </div>
      <Divider />
      <div>
        <h3 className="text-2xl font-semibold mb-3">Moves</h3>
        <div className="flex flex-wrap gap-3">
          {moves.map(({ move }) => (
            <Badge type={PokemonType.normal} key={move.name}>
              {move.name}
            </Badge>
          ))}
        </div>
      </div>
      <Divider />
    </main>
  );
};

export default PokemonDetails;
