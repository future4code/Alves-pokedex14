import React from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { DisplayCards, StyledH2 } from './Styled'
import { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function Home() {


const { pokemonList, setPokemonList } = useContext(GlobalStateContext)

console.log(state.pokemonList)


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
