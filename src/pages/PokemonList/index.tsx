import { useState, useEffect } from "react";
import { debounce } from "ts-debounce";

import { usePokemons } from "../../store";
import { PokemonType } from "../../types";
import { LocalStoragePokemonsKey } from "../../constants";

import ListItem from "./ListItem";
import ItemPlaceholder from "./ItemPlaceholder";
import Filters from "./Filters";
import Image from "../../components/Image";
import Badge from "../../components/Badge";
import Loader from "../../components/Loader";

import pika from "../../assets/pika.png";

import { hasItem } from "../../services/localStorageService";

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
  const visiblePokemons = usePokemons((state) => state.visiblePokemons);
  const updateVisiblePokemons = usePokemons(
    (state) => state.updateVisiblePokemons
  );
  const loading = usePokemons((state) => state.loading);
  const hasPokemonsStored = hasItem(LocalStoragePokemonsKey);
  const [hasMore, setHasMore] = useState(true);

  const handleScroll = debounce((event: Event) => {
    event.preventDefault();

    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50 &&
      !loading &&
      hasMore
    ) {
      if (visiblePokemons.length < filteredPokemons.length) {
        updateVisiblePokemons(visiblePokemons.length);
      } else {
        setHasMore(false);
      }
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    loading,
    hasMore,
    filteredPokemons,
    visiblePokemons,
    updateVisiblePokemons,
  ]);

  useEffect(() => {
    setHasMore(true);
  }, [filteredPokemons.length]);

  return (
    <main className="w-full">
      <section className="bg-gradient-to-tr from-purple-800 to-orange-600">
        <div className="flex flex-col items-center xl:flex-row gap-24 max-w-7xl mx-auto py-16 px-5">
          <Image className="w-1/2 lg:-mb-16" src={pika} alt="Poster pika" />

          <div className="flex flex-col gap-5 max-w-lg">
            <div className="flex items-center gap-5">
              <h2 className="text-4xl font-bold text-white">
                The World of Pokémon
              </h2>
              {loading ? (
                <Loader />
              ) : (
                <Badge className="-mb-2" type={PokemonType.ghost}>
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
        <div className="text-center pt-12 pb-10">
          <h2 className="text-4xl font-bold text-slate-700">Pokémon List</h2>

          <p className="text-slate-500 h-5 w-full text-sm">
            {loading &&
              hasPokemonsStored &&
              "(The data is currently loading, and you are viewing cached data)"}
          </p>
        </div>
        {loading && !hasPokemonsStored ? (
          <ListPlaceholder />
        ) : (
          <ul className="list-none p-5">
            {visiblePokemons.map((pokemon) => (
              <ListItem key={pokemon.name} {...pokemon} />
            ))}
            {!loading && filteredPokemons.length === 0 && (
              <li className="text-center pt-5 pb-12 text-2xl font-semibold text-gray-500">
                No pokémon found
              </li>
            )}
          </ul>
        )}
      </section>
    </main>
  );
}
