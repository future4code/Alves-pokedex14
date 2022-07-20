import React, {useState} from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState()


    const getPokemons = () => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
        .then((res) => setPokemons(res.data))
        .catch((err) => alert(err.response))
    }


    return (
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
