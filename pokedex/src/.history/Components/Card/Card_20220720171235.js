import React from 'react'
import { MainContainer, PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'
import { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import axios from 'axios'

export default function Card(props) {
  const { states, constants } = useContext(GlobalStateContext)


  useEffect(() => {
    constants.getDetails()
  }, [props.url])

 
  return (
    <MainContainer >
      <StyledPokemonNumber>
        #{states.pokemonDetail && states.pokemonDetail.id}
      </StyledPokemonNumber>

      <StyledPokemonName>
        {props.name}
      </StyledPokemonName>

      <PokemonTypePoison translate='no'>
        <img src={Poison}></img>
        Poison
      </PokemonTypePoison>

      <PokemonTypeGrass translate='no'>
        <img src={Grass} ></img>
        Grass
      </PokemonTypeGrass>

      <StyledDetails>
        Detalhes
      </StyledDetails>

      <PokemonImage src={states.pokemonDetail.sprites && states.pokemonDetail[`sprites`][`other`][`official-artwork`][`front_default`]} />

      <StyledButton>Capturar!</StyledButton>

    </MainContainer>
  )
}
