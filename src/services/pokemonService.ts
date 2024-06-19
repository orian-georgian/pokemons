import {
  PokemonClient,
  NamedAPIResource,
  NamedAPIResourceList,
} from "pokenode-ts";

import { Pokemon } from "../types";

const client = new PokemonClient();

// Function to fetch all pokemon data
export const fetchAllPokemons = async (
  limit: number = 20
): Promise<Pokemon[]> => {
  try {
    const offset = 0;
    const response = await client.listPokemons(offset, limit);
    const totalCount = response.count;
    const totalPages = Math.ceil(totalCount / limit);
    const promises: Promise<NamedAPIResourceList>[] = [];

    for (let page = 2; page <= totalPages; page++) {
      const promise: Promise<NamedAPIResourceList> = client.listPokemons(
        (page - 1) * limit,
        limit
      );
      promises.push(promise);
    }

    const responses = await Promise.all(promises);
    const allPokemons = [response, ...responses].flatMap((res) => res.results);

    const responseWithType = await Promise.all(
      allPokemons.map(async (pokemon) => {
        const details = await client.getPokemonByName(pokemon.name);

        return {
          name: pokemon.name,
          url: pokemon.url,
          types: details?.types.map((typeInfo) => typeInfo.type.name) || [],
          imageUrl: details?.sprites.front_default || "",
        };
      })
    );

    return responseWithType;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return [];
  }
};

export const fetchTypes = async (): Promise<NamedAPIResource[]> => {
  try {
    const response = await client.listTypes();
    return response.results;
  } catch (error) {
    console.error("Error fetching Pokemon types:", error);
    return [];
  }
};
