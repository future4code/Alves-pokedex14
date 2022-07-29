import React, { useContext, useEffect } from 'react'
import HeaderPokedex from '../../Components/Header/HeaderPokedex/HeaderPokedex'
import { DisplayCards, StyledH2 } from './Styled'
import GlobalStateContext from '../../Global/GlobalStateContext'
import CardPokedex from '../../Components/Card/CardPokedex'


export default function Pokedex() {
  const { states } = useContext(GlobalStateContext)


  const pokedexList= {}

  states.pokedex && states.pokedex.forEach((element, index) => {
    pokedexList['tipo' + index] = element
  })

  const renderPokedex = () => {
    states.pokedex && states.pokedex.map((pokemon) => {
      return <CardPokedex name={pokemon.nome}
      id={pokemon.id}
      tipo0={pokemon.tipo0}
      tipo1={pokemon.tipo1}/>
    })
  }

  useEffect(() => {
    renderPokedex()
  }, []);



  let cachePokedex = JSON.parse(localStorage.getItem('pokedex cache'));
  const deletePokemon = (id) => {
    const confirmBox = window.confirm(
      `You really want to remove this pokemon from your pokedex?`
  )
  if (confirmBox === true) {
    const novaLista = cachePokedex.filter((pokemon) => {
      return pokemon.id !== id
    })
    states.setPokedex(novaLista)
    localStorage.setItem('pokedex cache', JSON.stringify(novaLista))
    cachePokedex = novaLista;
  }
  }
  
  return (
    <div>
      <HeaderPokedex />
      <StyledH2>Meus Pokémons</StyledH2>
      <DisplayCards>
      {cachePokedex && cachePokedex.map((pokemon) => {
        return <CardPokedex 
        key={pokemon.id}
        name={pokemon.nome}
        id={pokemon.id}
        tipo0={pokemon.tipo0}
        tipo1={pokemon.tipo1}
        photo={pokemon.foto}
        deletePokemon={deletePokemon}/>
      })}
      </DisplayCards>
    </div>
  )
}