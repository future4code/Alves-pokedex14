import React from 'react'
import { MainContainer, PokemonImage, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber, PokemonType0, PokemonType1, InvisibleSpan } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Fire from '../../Assets/Fire.svg'
import Flying from '../../Assets/Flying.svg'
import Water from '../../Assets/Water.svg'
import Bug from '../../Assets/Bug.svg'
import Normal from '../../Assets/Normal.svg'
import Dark from '../../Assets/Dark.svg'
import Dragon from '../../Assets/Dragon.svg'
import Electric from '../../Assets/Electric.svg'
import Fairy from '../../Assets/Fairy.svg'
import Fighting from '../../Assets/Fighting.svg'
import Ghost from '../../Assets/Ghost.svg'
import Ground from '../../Assets/Ground.svg'
import Ice from '../../Assets/Ice.svg'
import Psychic from '../../Assets/Psychic.svg'
import Rock from '../../Assets/Rock.svg'
import Steel from '../../Assets/Steel.svg'
import { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import axios from 'axios'
import { goToDetailsPage } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {
  const [pokemonDetail, setPokemonDetail] = useState({})
  const { states } = useContext(GlobalStateContext)
  const [pokemonType, setPokemonType] = useState([])
  const navigate = useNavigate();

  //

  const getDetails = () => {
    axios
      .get(`${props.url}`)
      .then((res) => {
        setPokemonDetail(res.data)
        setPokemonType(res.data.types)
      })
      .catch((err) => {

      })
  }

  useEffect(() => {
    getDetails()
  }, [props.url])

  // 

  useEffect(() => {

  }, [pokemonDetail])

  const type = {}

  pokemonType.forEach((element, index) => {
    type['tipo' + index] = element.type.name
  })
 
  // 

  const changeType0MiniImage = () => {
    if (type.tipo0 === 'grass') {
      return Grass
    } else if (type.tipo0 === 'poison') {
      return Poison
    } else if (type.tipo0 === 'fire') {
      return Fire
    } else if (type.tipo0 === 'flying') {
      return Flying
    } else if (type.tipo0 === 'water') {
      return Water
    } else if (type.tipo0 === 'bug') {
      return Bug
    } else if (type.tipo0 === 'normal') {
      return Normal
    } else if (type.tipo0 === 'dark') {
      return Dark
    } else if (type.tipo0 === 'dragon') {
      return Dragon
    } else if (type.tipo0 === 'electric') {
      return Electric
    } else if (type.tipo0 === 'fairy') {
      return Fairy
    } else if (type.tipo0 === 'fighting') {
      return Fighting
    } else if (type.tipo0 === 'ghost') {
      return Ghost
    } else if (type.tipo0 === 'ground') {
      return Ground
    } else if (type.tipo0 === 'ice') {
      return Ice
    } else if (type.tipo0 === 'psychic') {
      return Psychic
    } else if (type.tipo0 === 'rock') {
      return Rock
    } else if (type.tipo0 === 'steel') {
      return Steel
    }
  }

  const changeType1MiniImage = () => {
    if (type.tipo1 === 'grass') {
      return Grass
    } else if (type.tipo1 === 'poison') {
      return Poison
    } else if (type.tipo1 === 'fire') {
      return Fire
    } else if (type.tipo1 === 'flying') {
      return Flying
    } else if (type.tipo1 === 'water') {
      return Water
    } else if (type.tipo1 === 'bug') {
      return Bug
    } else if (type.tipo1 === 'normal') {
      return Normal
    } else if (type.tipo1 === 'dark') {
      return Dark
    } else if (type.tipo1 === 'dragon') {
      return Dragon
    } else if (type.tipo1 === 'electric') {
      return Electric
    } else if (type.tipo1 === 'fairy') {
      return Fairy
    } else if (type.tipo1 === 'fighting') {
      return Fighting
    } else if (type.tipo1 === 'ghost') {
      return Ghost
    } else if (type.tipo1 === 'ground') {
      return Ground
    } else if (type.tipo1 === 'ice') {
      return Ice
    } else if (type.tipo1 === 'psychic') {
      return Psychic
    } else if (type.tipo1 === 'rock') {
      return Rock
    } else if (type.tipo1 === 'steel') {
      return Steel
    }
  }

  // 

  let listPokedexCache = JSON.parse(localStorage.getItem('pokedex cache'));

  const getToPokedex = (nome, id, tipo0, tipo1, foto) => {
    let listPokedexCache = JSON.parse(localStorage.getItem('pokedex cache'));
    if (listPokedexCache !== null) {
      const novoPokemon = { nome, id, tipo0, tipo1, foto }
      const novaListaCapturados = [...states.pokedex, novoPokemon]
      states.setPokedex(novaListaCapturados)
      localStorage.setItem('pokedex cache', JSON.stringify(novaListaCapturados))
      alert("Pokemon Capturado!")
    } 
    else {
      const novoPokemon = { nome, id, tipo0, tipo1, foto }
      const novaListaCapturados = [...states.pokedex, novoPokemon]
      states.setPokedex(novaListaCapturados)
      localStorage.setItem('pokedex cache', JSON.stringify(novaListaCapturados))
      alert("Pokemon Capturado!")
    }
  }

  //

  return (
    <MainContainer type={type}>
      <StyledPokemonNumber>
        #{pokemonDetail && pokemonDetail.id}
      </StyledPokemonNumber>

      <StyledPokemonName>
        {props.name}
      </StyledPokemonName>

      <PokemonType0 type={type} >
        <img alt='pokemon type symbol' src={changeType0MiniImage()}></img>
        {type.tipo0}
      </PokemonType0>

      {type.tipo1 ? <PokemonType1 type={type}>
        <img alt='pokemon type symbol' src={changeType1MiniImage()} ></img>
        {type.tipo1}
      </PokemonType1> : <InvisibleSpan></InvisibleSpan>}

      <StyledDetails onClick={()=>goToDetailsPage(navigate, props.name)}>
        Detalhes
      </StyledDetails>
      <PokemonImage alt='pokemon official artwork' src={pokemonDetail.sprites && pokemonDetail[`sprites`][`other`][`official-artwork`][`front_default`]} />

      <StyledButton onClick={() => getToPokedex(pokemonDetail.name, pokemonDetail.id, type.tipo0, type.tipo1, pokemonDetail[`sprites`][`other`][`official-artwork`][`front_default`])}>Capturar!</StyledButton>

    </MainContainer>
  )
}
