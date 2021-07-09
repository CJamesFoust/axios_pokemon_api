import React, { useContext, useState, useEffect } from 'react';
import styles from './Button.module.css';
import PokemonContext from '../context/PokemonContext';
import axios from 'axios';

const Button = () => {
    const { setPokemon } = useContext(PokemonContext);
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response=>{
            setTemp(response.data.results)
        })
    }, []);

    const fetchPokemon = () => {
        setPokemon(temp);
    }

    return (
        <button onClick={ fetchPokemon }>Fetch Pokemon</button>
    )
}

export default Button;