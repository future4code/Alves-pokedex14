import React from 'react'
import { MainContainer, PokemonImage, StyledButton, StyledDetails, StyledPokemonName, StyledPokemonNumber, PokemonType0, PokemonType1, InvisibleSpan } from './StyledPokedex'
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
import { useContext, useState } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { goToDetailsPokedexPage } from '../../Routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom'

export default function CardPokedex(props) {
    const [pokemonDetail, setPokemonDetail] = useState({})
    const { states, constants } = useContext(GlobalStateContext)

    //

    const params = useParams();
    const navigate = useNavigate();


    // props icons rendering logic

    const changeprops0MiniImage = () => {
        if (props.tipo0 === 'grass') {
            return Grass
        } else if (props.tipo0 === 'poison') {
            return Poison
        } else if (props.tipo0 === 'fire') {
            return Fire
        } else if (props.tipo0 === 'flying') {
            return Flying
        } else if (props.tipo0 === 'water') {
            return Water
        } else if (props.tipo0 === 'bug') {
            return Bug
        } else if (props.tipo0 === 'normal') {
            return Normal
        } else if (props.tipo0 === 'dark') {
            return Dark
        } else if (props.tipo0 === 'dragon') {
            return Dragon
        } else if (props.tipo0 === 'electric') {
            return Electric
        } else if (props.tipo0 === 'fairy') {
            return Fairy
        } else if (props.tipo0 === 'fighting') {
            return Fighting
        } else if (props.tipo0 === 'ghost') {
            return Ghost
        } else if (props.tipo0 === 'ground') {
            return Ground
        } else if (props.tipo0 === 'ice') {
            return Ice
        } else if (props.tipo0 === 'psychic') {
            return Psychic
        } else if (props.tipo0 === 'rock') {
            return Rock
        } else if (props.tipo0 === 'steel') {
            return Steel
        }
    }

    const changeprops1MiniImage = () => {
        if (props.tipo1 === 'grass') {
            return Grass
        } else if (props.tipo1 === 'poison') {
            return Poison
        } else if (props.tipo1 === 'fire') {
            return Fire
        } else if (props.tipo1 === 'flying') {
            return Flying
        } else if (props.tipo1 === 'water') {
            return Water
        } else if (props.tipo1 === 'bug') {
            return Bug
        } else if (props.tipo1 === 'normal') {
            return Normal
        } else if (props.tipo1 === 'dark') {
            return Dark
        } else if (props.tipo1 === 'dragon') {
            return Dragon
        } else if (props.tipo1 === 'electric') {
            return Electric
        } else if (props.tipo1 === 'fairy') {
            return Fairy
        } else if (props.tipo1 === 'fighting') {
            return Fighting
        } else if (props.tipo1 === 'ghost') {
            return Ghost
        } else if (props.tipo1 === 'ground') {
            return Ground
        } else if (props.tipo1 === 'ice') {
            return Ice
        } else if (props.tipo1 === 'psychic') {
            return Psychic
        } else if (props.tipo1 === 'rock') {
            return Rock
        } else if (props.tipo1 === 'steel') {
            return Steel
        }
    }

    // add to pokedex

    // const getToPokedex = (nome, id, tipo0, tipo1, foto) => {
    //     const novoPokemon = { nome, id, tipo0, tipo1, foto }
    //     const newPokedexList = [...states.pokedex, novoPokemon]
    //     states.setPokedex(newPokedexList)
    //     console.log(`list`, states.pokedex)
    // }

    return (
        <MainContainer tipo0={props.tipo0}>
            <StyledPokemonNumber>
                #{props.id}
            </StyledPokemonNumber>

            <StyledPokemonName>
                {props.name}
            </StyledPokemonName>

            <PokemonType0 tipo0={props.tipo0}>
                <img alt='pokemon type symbol' src={changeprops0MiniImage()}></img>
                {props.tipo0}
            </PokemonType0 >

            {props.tipo1 ? <PokemonType1 tipo1={props.tipo1} >
                <img alt='pokemon type symbol' src={changeprops1MiniImage()} ></img>
                {props.tipo1}
            </PokemonType1> : <InvisibleSpan></InvisibleSpan>}

            <StyledDetails onClick={() => goToDetailsPokedexPage(navigate, props.name)}>
                Detalhes
            </StyledDetails>
            <PokemonImage alt='pokemon official artwork' src={props.photo && props.photo} />

            <StyledButton onClick={() => props.deletePokemon(props.id)}>Excluir!</StyledButton>

        </MainContainer>
    )
}
