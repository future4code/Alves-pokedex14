import styled from "styled-components";
import BackgroundCard from '../../Assets/BackgroundCard.svg'

export const MainContainer = styled.div`
min-width: 24.625rem;
height: 165px;
background: ${props => props.type.tipo0 === "grass" && "#729F92;"};
background: ${props => props.type.tipo0 === "fire" && "#EAAB7D;"};
background: ${props => props.type.tipo0 === "water" && "#71C3FF;"};
background: ${props => props.type.tipo0 === "bug" && "#76A866"};
background: ${props => props.type.tipo0 === "normal" && "#BF9762;"};
background: ${props => props.type.tipo0 === "poison" && "#d1a3d0"};
background: ${props => props.type.tipo0 === "electric" && "#ffc95e"};
background: ${props => props.type.tipo0 === "ground" && "#b6866f"};
background: ${props => props.type.tipo0 === "fairy" && "#bd7886"};
background: ${props => props.type.tipo0 === "fighting" && "#B0385A"};
background: ${props => props.type.tipo0 === "psychic" && "#e05e65"};
background: ${props => props.type.tipo0 === "rock" && "#9e8f65"};
background: ${props => props.type.tipo0 === "ghost" && "#7084ca"};
background: ${props => props.type.tipo0 === "ice" && "#48a497"};
background: ${props => props.type.tipo0 === "dragon" && "#004170;"};
background: ${props => props.type.tipo0 === "steel" && "#B7B9D0"};
background: ${props => props.type.tipo0 === "dark" && "#55433c"};
background: ${props => props.type.tipo0 === "flying" && "#A891EC"};
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
border-radius: 12px;
padding: 25px 23px 20px 23px;
background-image: url(${BackgroundCard});
background-repeat: no-repeat;
background-position-x: 200px;
background-position-y: -10px;
background-size: 235.73px 245.73px;
@media (max-width: 574px){
    margin-right: 20px;
    min-width: 15.625rem;
    margin-right: 120px;
}
`

export const StyledPokemonNumber = styled.h4`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`
export const StyledPokemonName = styled.h3`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
`

export const PokemonType0 = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 8px;
gap: 17px;
position: absolute;
width: 83px;
height: 21px;

background: ${props => props.type.tipo0 === "grass" && "#406b60;"};
background: ${props => props.type.tipo0 === "fire" && "#f7785c"};
background: ${props => props.type.tipo0 === "water" && "#2d8ec6;"};
background: ${props => props.type.tipo0 === "bug" && " #437436;"};
background: ${props => props.type.tipo0 === "normal" && "#876432;"};
background: ${props => props.type.tipo0 === "dragon" && "#4770a4;"};
background: ${props => props.type.tipo0 === "poison" && "#A43E9E"};
background: ${props => props.type.tipo0 === "electric" && "#c5a100"};
background: ${props => props.type.tipo0 === "ground" && "#DEC16B"};
background: ${props => props.type.tipo0 === "fairy" && "#E69EAC"};
background: ${props => props.type.tipo0 === "fighting" && "#C12239"};
background: ${props => props.type.tipo0 === "psychic" && "#FB5584"};
background: ${props => props.type.tipo0 === "rock" && "#B69E31"};
background: ${props => props.type.tipo0 === "ghost" && "#70559B"};
background: ${props => props.type.tipo0 === "ice" && "#9AD6DF"};
background: ${props => props.type.tipo0 === "steel" && "#B7B9D0"};
background: ${props => props.type.tipo0 === "dark" && "#75574C"};
background: ${props => props.type.tipo0 === "flying" && "#A891EC"};
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;

margin-top: 8px;
`

export const PokemonType1 = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 8px;
gap: 17px;

position: relative;
left: 107px;
width: 83px;
height: 21px;

background: ${props => props.type.tipo1 === "grass" && "#406b60;"};
background: ${props => props.type.tipo1 === "fire" && "#f7785c"};
background: ${props => props.type.tipo1 === "water" && "#2d8ec6;"};
background: ${props => props.type.tipo1 === "bug" && " #437436;"};
background: ${props => props.type.tipo1 === "normal" && "#876432;"};
background: ${props => props.type.tipo1 === "dragon" && "#4770a4;"};
background: ${props => props.type.tipo1 === "poison" && "#A43E9E"};
background: ${props => props.type.tipo1 === "electric" && "#c5a100"};
background: ${props => props.type.tipo1 === "ground" && "#DEC16B"};
background: ${props => props.type.tipo1 === "fairy" && "#E69EAC"};
background: ${props => props.type.tipo1 === "fighting" && "#C12239"};
background: ${props => props.type.tipo1 === "psychic" && "#FB5584"};
background: ${props => props.type.tipo1 === "rock" && "#B69E31"};
background: ${props => props.type.tipo1 === "ghost" && "#70559B"};
background: ${props => props.type.tipo1 === "ice" && "#9AD6DF"};
background: ${props => props.type.tipo1 === "steel" && "#B7B9D0"};
background: ${props => props.type.tipo1 === "dark" && "#75574C"};
background: ${props => props.type.tipo1 === "flying" && "#A891EC"};
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;

margin-top: 8px;
`

export const InvisibleSpan = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 8px;
gap: 17px;

position: relative;
left: 107px;
width: 83px;
height: 21px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
display: hidden;
margin-top: 8px;
`

export const StyledDetails = styled.h3`
width: 74px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
margin-top: 46px;

text-decoration-line: underline;

color: #FFFFFF;
cursor: pointer;
`

export const PokemonImage = styled.img`
position: relative;
width: 193px;
height: 193px;
bottom: 245px;
left: 217px;
transition-duration: 0.5s;
:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
}
@media (max-width: 574px){
    width: 143px;
height: 143px;
left: 130px;
}
`

export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: relative;
bottom: 225px;
left: 250px;
width: 136px;
height: 34px;
border: none;
background: #FFFFFF;
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #0F0F0F;
cursor: pointer;
:hover{
    background: #EDF1EC;
}
@media (max-width: 574px){
    bottom: 187px;
left: 130px;
}
`

