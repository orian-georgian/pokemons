import { HashRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
