import { ChangeEvent, useCallback, useEffect } from "react";
import { debounce } from "ts-debounce";

import { useFilters, usePokemons } from "../../../store";

const Filters = () => {
  const search = useFilters((state) => state.search);
  const type = useFilters((state) => state.type);
  const types = useFilters((state) => state.types);
  const changeSearch = useFilters((state) => state.changeSearch);
  const changeType = useFilters((state) => state.changeType);
  const fetchTypes = useFilters((state) => state.fetchTypes);
  const filterPokemons = usePokemons((state) => state.filterPokemons);

  // Debounce the filterPokemons function
  const debouncedFilterPokemons = useCallback(
    debounce((value: string) => {
      filterPokemons(value, type);
    }, 250),
    [filterPokemons]
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    changeSearch(value); // Update search state immediately if needed
    debouncedFilterPokemons(value); // Debounced call to filterPokemons
  };

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    changeType(value);
    filterPokemons(search, value);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div className="w-full">
      <input
        className="w-full max-w-lg px-4 py-2 mb-5 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-600 shadow-md"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearchChange}
      />
      <p className="text-white">Filter by type</p>
      <select
        className="w-full max-w-lg px-4 py-2 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-600 shadow-md"
        value={type}
        onChange={handleTypeChange}
      >
        <option value="">All types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
