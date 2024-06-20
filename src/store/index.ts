import { create } from "zustand";

import { Pokemon, PokemonStore, FiltersStore } from "../types";
import { LocalStoragePokemonsKey } from "../constants";

import { fetchAllPokemons, fetchTypes } from "../services/pokemonService";
import { hasItem, getItem, setItem } from "../services/localStorageService";

export const usePokemons = create<PokemonStore>((set) => ({
  pokemons: [],
  filteredPokemons: [],
  visiblePokemons: [],
  loading: true,
  error: null,
  updateVisiblePokemons: (index: number) =>
    set((state) => ({
      ...state,
      visiblePokemons: [
        ...state.visiblePokemons,
        ...state.filteredPokemons.slice(index, index + 10),
      ],
    })),
  fetchPokemons: async () => {
    try {
      const hasPokemons = hasItem(LocalStoragePokemonsKey);

      set({
        ...(hasPokemons
          ? {
              filteredPokemons:
                getItem<Pokemon[]>(LocalStoragePokemonsKey) || [],
              visiblePokemons: (
                getItem<Pokemon[]>(LocalStoragePokemonsKey) || []
              ).slice(0, 10),
            }
          : {}),
      });

      const pokemons: Pokemon[] = await fetchAllPokemons();

      setItem(LocalStoragePokemonsKey, pokemons);
      set({
        pokemons,
        loading: false,
        filteredPokemons: pokemons,
        visiblePokemons: pokemons.slice(0, 10),
      });
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      set({
        pokemons: [],
        filteredPokemons: [],
        visiblePokemons: [],
        error: "Error fetching Pokemon data",
      });
    }
  },
  filterPokemons: (search: string, type: string) =>
    set((state) => {
      const filteredData = state.pokemons?.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
          (!!type ? pokemon.types?.includes(type) : true)
      );

      return {
        ...state,
        filteredPokemons: filteredData,
        visiblePokemons: filteredData.slice(0, 10),
      };
    }),
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
