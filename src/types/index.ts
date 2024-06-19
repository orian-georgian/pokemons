export type Pokemon = {
  name: string;
  url: string;
  types: string[];
  imageUrl: string;
};

export type PokemonStore = {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  fetchPokemons: () => Promise<void>;
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
