import React from 'react'
import { PokemonImage, PokemonTypeGrass, PokemonTypePoison, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'
import { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import axios from 'axios'
import styled from 'styled-components'

export default function Card(props) {
  const [pokemonDetail, setPokemonDetail] = useState({})
  const { states, constants } = useContext(GlobalStateContext)

  const getDetails = () => {
    axios
      .get(`${props.url}`)
      .then((res) => {
        setPokemonDetail(res.data)
        console.log(res.data.types[0])
      })
      .catch((err) => {

      })
  }

  useEffect(() => {
    getDetails()
  }, [props.url])

  // const changeBackground = () => {
  //   if (pokemonDetail.types[0].type.name === "grass") {
  //     return 'red'
  //   }
  // }

  const switchBackground = () => {
    switch (pokemonDetail.types[0].type.name) {
      case "grass":
        background: "red";
        break;
    }
  }

  const MainContainer = styled.div`
min-width: 394px;
height: 165px;
${switchBackground}
border-radius: 12px;
padding: 25px 23px 20px 23px;
background-image: url(${BackgroundCard});
background-repeat: no-repeat;
background-position-x: 200px;
background-position-y: -10px;
background-size: 235.73px 245.73px;
`

  return (
    <MainContainer >
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
