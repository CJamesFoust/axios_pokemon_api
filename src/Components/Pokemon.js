import React, { useContext }  from 'react';
import PokemonContext from '../context/PokemonContext';

const Pokemon = () => {
    const { pokemon } = useContext(PokemonContext);

    return (
        <div>
            {pokemon.map((pokemon, i) => {
                return <li key={ i }>{ pokemon.name }{ pokemon.id }</li>
            })}
        </div>
    )
}

export default Pokemon;