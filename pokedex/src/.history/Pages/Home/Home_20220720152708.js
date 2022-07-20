import React from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { DisplayCards, StyledH2 } from './Styled'
import { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { useEffect } from 'react'

export default function Home() {
  const { states, constants } = useContext(GlobalStateContext)

  console.log(states.pokemonsList)

  useEffect(() => {
    constants.getPokemons()
  }, []);

  const enviaInfos = () => {
    states.pokemonsList.map((item, indice) => {
      return <Card url={item[indice].url}/>
    })
  }

  return (
    <div>
      <Header />
      <StyledH2>Todos Pokémons</StyledH2>
      <DisplayCards>
        {enviaInfos()}
        <Card></Card>
      </DisplayCards>
    </div>
  )
}
