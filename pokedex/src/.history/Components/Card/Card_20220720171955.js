import React from 'react'
import { MainContainer, PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'
import { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import axios from 'axios'

export default function Card(props) {
  const [pokemonDetail, setPokemonDetail] = useState({})
  const { states, constants } = useContext(GlobalStateContext)

  const getDetails = () => {
    axios
      .get(`${props.url}`)
      .then((res) => {
        setPokemonDetail(res.data)
        console.log(res.data.types[0].type.name)
      })
      .catch((err) => {

      })
  }

  useEffect(() => {
    getDetails()
  }, [props.url])

  const changeBackgroundColor = () => {
    if (props.pokemonDetail.types[0].type.name === "poison" && props.pokemonDetail.types[1].type.name === "grass") {
      return 'background: red'
    }
  }
 
  return (
    <MainContainer pokemonDetail={pokemonDetail} changeBackground={changeBackgroundColor} >
      <StyledPokemonNumber>
        #{pokemonDetail && pokemonDetail.id}
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

      <PokemonImage src={pokemonDetail.sprites && pokemonDetail[`sprites`][`other`][`official-artwork`][`front_default`]} />

      <StyledButton>Capturar!</StyledButton>

    </MainContainer>
  )
}
