import React from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { DisplayCards, StyledH2 } from './Styled'
import { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function Home() {


const { states, constants } = useContext(GlobalStateContext)

console.log(states.pokemonList)
console.log(constants)


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
