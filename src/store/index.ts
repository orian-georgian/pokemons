import { create } from "zustand";

import { Pokemon, PokemonStore } from "../types";

import { fetchAllPokemons } from "../services/pokemonService";

export const usePokemons = create<PokemonStore>((set) => ({
  pokemons: [],
  filteredPokemons: [],
  loading: false,
  error: null,
  fetchPokemons: async () => {
    try {
      set({ loading: true });
      const pokemons: Pokemon[] = await fetchAllPokemons();
      set({ pokemons, loading: false, filteredPokemons: pokemons });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      set({
        pokemons: [],
        loading: false,
        filteredPokemons: [],
        error: "Error fetching Pokemon data",
      });
    }
  },
}));
