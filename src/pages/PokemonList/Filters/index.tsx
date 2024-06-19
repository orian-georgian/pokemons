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
    <div>
      <input value={search} onChange={handleSearchChange} />
      <select value={type} onChange={handleTypeChange}>
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
