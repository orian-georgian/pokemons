import { useEffect } from "react";

import { usePokemons } from "../../store";

import { FixedSizeList as List, ListChildComponentProps } from "react-window";

import ListItem from "./ListItem";
import ItemPlaceholder from "./ItemPlaceholder";

const ListPlaceholder = () => (
  <div className="flex flex-col gap-5">
    <ItemPlaceholder />
    <ItemPlaceholder />
    <ItemPlaceholder />
    <ItemPlaceholder />
  </div>
);

export default function PokemonList() {
  const filteredPokemons = usePokemons((state) => state.filteredPokemons);
  const fetchPokemons = usePokemons((state) => state.fetchPokemons);
  const loading = usePokemons((state) => state.loading);

  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style}>
      <ListItem {...filteredPokemons[index]} />
    </div>
  );

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <main className="w-full">
      {loading ? (
        <ListPlaceholder />
      ) : (
        <ul className="list-none p-5">
          {filteredPokemons.map((pokemon) => (
            <ListItem key={pokemon.name} {...pokemon} />
          ))}
        </ul>
      )}
      {/* <List
        height={500}
        itemCount={filteredPokemons.length}
        itemSize={120}
        width="100%"
      >
        {Row}
      </List> */}
    </main>
  );
}
