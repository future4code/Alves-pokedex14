import React from 'react'
import { MainContainer, PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'
import { useNavigate } from 'react-router-dom'

export default function Card2() {
  const navigate =  useNavigate()

  const goToDetailsPage = () => {
    navigate("/details/:id")
  }

  const goToPokedexPage = () => {
    navigate("/pokedex")
  }
  return (
    <MainContainer>
      <StyledPokemonNumber>
        #01
      </StyledPokemonNumber>

      <StyledPokemonName>
      Bulbasaur
      </StyledPokemonName>

      <PokemonTypePoison>
        <img src={Poison}></img>
        Poison
      </PokemonTypePoison>

      <PokemonTypeGrass>
        <img src={Grass} ></img>
        Grass
      </PokemonTypeGrass>

      <StyledDetails onClick={goToDetailsPage}>
        Detalhes
      </StyledDetails>

      <PokemonImage src={Bulbasaur} />
      
      <StyledButton onClick={goToPokedexPage}>
        Capturar!
      </StyledButton>

    </MainContainer>
  )
}
