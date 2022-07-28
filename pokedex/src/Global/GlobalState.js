import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemonsList, setPokemonsList] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [pokedex, setPokedex] = useState([])
    const [pokemonPage, setPokemonPage] = useState([])
    const [pokemonTypes, setPokemonTypes] = useState([])

    //

    const getPokemons = (pageValue) => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${pageValue}`)
        .then((res) => setPokemonsList(res.data.results))
        .catch((err) => alert(err.response))
    }

    //

    const getDetails = () => {
        axios
          .get(`${props.url}`)
          .then((res) => {
            setPokemonDetail(res.data)
            console.log(res.data)
          })
          .catch((err) => {
            alert(err.response)
          })
      }

    // 

    const getDetailsPage = (name) => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemonPage(res.data)
       setPokemonTypes(res.data.types)
      })
      .catch((err) => {
        alert(err.response)
      })
    }
    
    // 
      const states = {
        pokemonsList,
        setPokemonsList,
        pokemonDetail,
        setPokemonDetail,
        pokedex,
        setPokedex,
        pokemonPage,
        setPokemonPage,
        pokemonTypes,
        setPokemonTypes
      }

      const constants = {
        getPokemons,
        getDetails,
        getDetailsPage
        
      }



    return (
        <GlobalStateContext.Provider value={{states, constants}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
