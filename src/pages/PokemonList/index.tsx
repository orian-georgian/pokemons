import { usePokemons } from "../../store";
import { PokemonType } from "../../types";

// import { FixedSizeList as List, ListChildComponentProps } from "react-window";

import ListItem from "./ListItem";
import ItemPlaceholder from "./ItemPlaceholder";
import Filters from "./Filters";
import Image from "../../components/Image";
import Badge from "../../components/Badge";
import Loader from "../../components/Loader";

import pika from "../../assets/pika.png";

const ListPlaceholder = () => (
  <div className="flex flex-col gap-5 p-5">
    <ItemPlaceholder />
    <ItemPlaceholder />
    <ItemPlaceholder />
    <ItemPlaceholder />
  </div>
);

export default function PokemonList() {
  const filteredPokemons = usePokemons((state) => state.filteredPokemons);
  const loading = usePokemons((state) => state.loading);

  /* const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style}>
      <ListItem {...filteredPokemons[index]} />
    </div>
  ); */

  return (
    <main className="w-full">
      <section className="bg-gradient-to-tr from-purple-800 to-orange-600">
        <div className="flex flex-col items-center xl:flex-row gap-24 max-w-7xl mx-auto py-16 px-5">
          <Image className="w-1/2 lg:-mb-16" src={pika} alt="Poster pika" />

          <div className="flex flex-col gap-5 max-w-lg">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold text-white">
                The World of Pokémon
              </h2>
              {loading ? (
                <Loader />
              ) : (
                <Badge type={PokemonType.ghost}>
                  {filteredPokemons.length}
                </Badge>
              )}
            </div>

            <p className="text-white">
              In a universe brimming with extraordinary creatures and endless
              adventure, Pokémon stand as iconic symbols of both wonder and
              friendship. The Pokémon world is populated by a vast array of
              species, each categorized into different types such as Water,
              Fire, Grass, Electric, Psychic, and many more.
            </p>
            <Filters />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-5">
        {loading ? (
          <ListPlaceholder />
        ) : (
          <ul className="list-none p-5">
            {filteredPokemons.map((pokemon) => (
              <ListItem key={pokemon.name} {...pokemon} />
            ))}
            {filteredPokemons.length === 0 && (
              <li className="text-center py-24 text-2xl font-semibold text-gray-500">
                No pokémon found
              </li>
            )}
          </ul>
        )}
      </section>

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
