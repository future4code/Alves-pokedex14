import React from 'react'
import { useState } from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { DisplayCards, StyledH2 } from './Styled'

export default function Home() {
 const [pokemons, setPokemons] = useState() 

  const getPokemons = () => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
    .then((res) => console.log(res))
    .catch((err) => alert(err.response))
}

  return (
    <div>
    <Header/>
    <StyledH2>Todos Pokémons</StyledH2>
    <DisplayCards>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </DisplayCards>
    </div>
  )
}
