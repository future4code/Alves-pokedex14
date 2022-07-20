import React, {useState, useEffect} from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemonsList, setPokemonsList] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState()

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
            console.log(res)
        })
        .catch((err) => {

        })
    }

    // 

      const states = {
        pokemonsList,
        setPokemonsList,
        pokemonDetail,
        setPokemonDetail
      }

      const constants = {
        getPokemons,
        getDetails
      }



    return (
        <GlobalStateContext.Provider value={{states, constants}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
