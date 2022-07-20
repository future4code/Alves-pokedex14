import React from 'react'
import { MainContainer, PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'
import { useContext, useEffect } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'

export default function Card(props) {
  console.log(props)
  const { states, constants } = useContext(GlobalStateContext)

  const getDetails = () => {
    axios
    .get(`${props.url}`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {

    })
}

  useEffect(() => {
    getDetails()
}, [props.url])
  
  return (
    <MainContainer>
      <StyledPokemonNumber>
        #01
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

      <PokemonImage src={Bulbasaur} />
      
      <StyledButton>Capturar!</StyledButton>

    </MainContainer>
  )
}
