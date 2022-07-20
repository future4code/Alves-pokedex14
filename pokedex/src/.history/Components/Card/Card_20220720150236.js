import React from 'react'
import { MainContainer, PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'

export default function Card(props) {
  console.log(props.url)
  
  return (
    <MainContainer>
      <StyledPokemonNumber>
        #01
      </StyledPokemonNumber>

      <StyledPokemonName>
      Bulbasaur
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

      <PokemonImage src={Bulbasaur} />
      
      <StyledButton>Capturar!</StyledButton>

    </MainContainer>
  )
}
