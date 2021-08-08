import PokeBox from "./PokeBox";
import SearchBox from "./SearchBox";

import { useState, useEffect } from "react";

const BoxFrame = ({ onPokeDetail }) => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  //fetch pokemon

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setPokemon(json.results);
    };

    fetchData();
  }, []);

  const getSearchPokemon = (pokeName) => {
    setSearch(pokeName);
  };

  return (
    <div>
      <div className="container title">
        <h1>Welcome to Pokemon App</h1>
      </div>
      <SearchBox onSearchPokemon={getSearchPokemon} />
      <div className="container">
        <div className="row">
          {pokemon.map((poke) => {
            if (poke.name.includes(search.toLocaleLowerCase())) {
              return (
                <div key={poke.name} className="col-3 outerCard">
                  <PokeBox poke={poke} onPokeDetail={onPokeDetail} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BoxFrame;
