export type Pokemon = {
  name: string;
  url: string;
  types: string[];
  imageUrl: string;
};

export type PokemonStore = {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  visiblePokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  updateVisiblePokemons: (index: number) => void;
  fetchPokemons: () => Promise<void>;
  filterPokemons: (search: string, type: string) => void;
};

export type FiltersStore = {
  types: string[];
  search: string;
  type: string;
  loading: boolean;
  error: string | null;
  changeSearch: (search: string) => void;
  changeType: (type: string) => void;
  fetchTypes: () => Promise<void>;
};

export enum PokemonType {
  normal = "normal",
  fire = "fire",
  water = "water",
  electric = "electric",
  grass = "grass",
  ice = "ice",
  fighting = "fighting",
  poison = "poison",
  ground = "ground",
  flying = "flying",
  psychic = "psychic",
  bug = "bug",
  rock = "rock",
  ghost = "ghost",
  dragon = "dragon",
  dark = "dark",
  steel = "steel",
  fairy = "fairy",
}
