import React, {useState, useEffect} from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemonsList, setPokemonsList] = useState([])

    // pegar lista

    const getPokemons = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=29&offset=0')
        .then((res) => setPokemonsList(res.data.results))
        .catch((err) => alert(err.response))
    }

    // pegar info cards

    const getDetails = () => {
        axios
          .get(`${props.url}`)
          .then((res) => {
            setPokemonDetail(res.data)
            console.log(res.data)
          })
          .catch((err) => {
    
          })
      }

    // 

      const states = {
        pokemonsList,
        setPokemonsList
      }

      const constants = {
        getPokemons,
      }



    return (
        <GlobalStateContext.Provider value={{states, constants}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
