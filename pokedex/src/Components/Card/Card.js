import React from 'react'
import { Container, PokemonType, PokemonType2, StyledButton, StyledDetails, StyledName, StyledNumber, StyledPokemonImg } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'
import Bulbasaur from '../../Assets/Bulbasaur.svg'

export default function Card() {
    return (
        <Container>

            <StyledNumber>
                #01
            </StyledNumber>

            <StyledName>
                Bulbasaur
            </StyledName>

            <PokemonType>
                <img src={Poison}></img>
                Poison
            </PokemonType>

            <PokemonType2>
                <img src={Grass}></img>
                Grass
            </PokemonType2>

            <StyledPokemonImg src={Bulbasaur}></StyledPokemonImg>

            <StyledDetails>
                Detalhes
            </StyledDetails>

            <StyledButton>Capturar!</StyledButton>
        </Container>
    )
}
