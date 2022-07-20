import React, {useState, useEffect} from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemonsList, setPokemonsList] = useState([])


    const getPokemons = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
        .then((res) => setPokemonsList(res.data))
        .catch((err) => alert(err.response))
    }

    // res.data.results[0].url

    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
        .then((res) => console.log(res.data.results))
        .catch((err) => alert(err.response))
      }, []);

      const states = {
        pokemonsList,
        setPokemonsList
      }



    return (
        <GlobalStateContext.Provider value={{states}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
