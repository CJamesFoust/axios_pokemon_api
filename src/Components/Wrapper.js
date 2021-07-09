import React, { useState } from "react";

import PokemonContext from "../context/PokemonContext";

export default ({ children }) => {
  const [pokemon, setPokemon] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};