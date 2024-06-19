import { create } from "zustand";

import { Pokemon, PokemonStore, FiltersStore } from "../types";

import { fetchAllPokemons, fetchTypes } from "../services/pokemonService";

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
        filteredPokemons: [],
        error: "Error fetching Pokemon data",
      });
    }
  },
  filterPokemons: (search: string, type: string) =>
    set((state) => ({
      ...state,
      filteredPokemons: state.pokemons?.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
          (!!type ? pokemon.types?.includes(type) : true)
      ),
    })),
}));

export const useFilters = create<FiltersStore>((set) => ({
  types: [],
  search: "",
  type: "",
  loading: false,
  error: null,
  changeSearch: (newSearch) =>
    set((state) => ({ ...state, search: newSearch })),
  changeType: (newType) => set((state) => ({ ...state, type: newType })),
  fetchTypes: async () => {
    try {
      set({ loading: true });
      const types = await fetchTypes();
      set({ types, loading: false });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      set({
        types: [],
        error: "Error fetching Pokemon data",
      });
    }
  },
}));
