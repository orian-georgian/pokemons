import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { usePokemons } from "./store";

import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/Header";

import "./App.css";

function App() {
  const fetchPokemons = usePokemons((state) => state.fetchPokemons);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
