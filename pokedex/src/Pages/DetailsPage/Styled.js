import styled from "styled-components";
import Pokeball from '../../Assets/Pokeball.svg'

export const StyledH2 = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
margin-top: 60px;
margin-left: 40px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 35px;
}
`

export const DisplayCards = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-items: center;
margin-top: 54px;
margin-left: 30px;
margin-right: 30px;
gap: 40px;
@media (max-width: 574px){
   margin-left: 10px;
}
`

export const ContainerCardDetails = styled.div`
width: 360px;
height: 640px;
background-color: grey;
margin-bottom: 50px;
padding-top: 24px;
padding-left: 24px;
padding-right: 24px;
border-radius: 12px;
background: ${props => props.type.tipo0 === "grass" && "#729F92;" };
background: ${props => props.type.tipo0 === "fire" && "#EAAB7D;" };
background: ${props => props.type.tipo0 === "water" && "#71C3FF;" };
background: ${props => props.type.tipo0 === "bug" && "#76A866" };
background: ${props => props.type.tipo0 === "normal" && "#BF9762;" };
background: ${props => props.type.tipo0 === "poison" && "#d1a3d0" };
background: ${props => props.type.tipo0 === "electric" && "#ffc95e" };
background: ${props => props.type.tipo0 === "ground" && "#b6866f" };
background: ${props => props.type.tipo0 === "fairy" && "#bd7886" };
background: ${props => props.type.tipo0 === "fighting" && "#B0385A" };
background: ${props => props.type.tipo0 === "psychic" && "#e05e65" };
background: ${props => props.type.tipo0 === "rock" && "#9e8f65" };
background: ${props => props.type.tipo0 === "ghost" && "#7084ca" };
background: ${props => props.type.tipo0 === "ice" && "#48a497" };
background: ${props => props.type.tipo0 === "dragon" && "#004170;" };
background: ${props => props.type.tipo0 === "steel" && "#B7B9D0" };
background: ${props => props.type.tipo0 === "dark" && "#55433c" };
background: ${props => props.type.tipo0 === "flying" && "#A891EC" };
background-image: url(${Pokeball});
background-repeat: no-repeat;
background-position-x: 143px;
background-position-y: 5px;
background-size: 260px 260px;
@media (max-width: 574px){
    width: 310px;
}
`

export const StyledTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0px;
gap: 16px;
`

export const StyledH3 = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 32px;
display: flex;
align-items: center;
color: #FFFFFF;
margin-left: 23px;
`

export const StyledId = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 32px;
display: flex;
align-items: center;

/* White */
color: #FFFFFF;
`

export const StyledPokemonImage = styled.img`
width: 220px;
height: 220px;
position: relative;
left: 75px;
top: 50px;
z-index: 2;
transition-duration: 0.5s;
:hover {
  transform: scale(1.07);
  transition-duration: 0.5s;
}
`

export const DivDetails = styled.div`
display: flex;
flex-direction: column;
padding: 56px 20px 0px;
gap: 16px;
position: relative;
bottom: 30px;
right: 20px;
width: 360px;
height: 355px;
z-index: 1;

/* White */
background: #FFFFFF;
border-radius: 8px;
@media (max-width: 574px){
    width: 310px;
}
`

export const DivTypes = styled.div`
display: flex;
flex-direction: row;
width: 312px;
height: 20px;
margin-top: 18px;
justify-content: center;
gap: 24px;
margin-left:25px;
`

export const Type0 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px 8px;

width: 46px;
height: 20px;

background: ${props => props.type.tipo0 === "grass" && "#729F92;" };
background: ${props => props.type.tipo0 === "fire" && "#EAAB7D;" };
background: ${props => props.type.tipo0 === "water" && "#71C3FF;" };
background: ${props => props.type.tipo0 === "bug" && "#76A866" };
background: ${props => props.type.tipo0 === "normal" && "#BF9762;" };
background: ${props => props.type.tipo0 === "poison" && "#d1a3d0" };
background: ${props => props.type.tipo0 === "electric" && "#ffc95e" };
background: ${props => props.type.tipo0 === "ground" && "#b6866f" };
background: ${props => props.type.tipo0 === "fairy" && "#bd7886" };
background: ${props => props.type.tipo0 === "fighting" && "#B0385A" };
background: ${props => props.type.tipo0 === "psychic" && "#e05e65" };
background: ${props => props.type.tipo0 === "rock" && "#9e8f65" };
background: ${props => props.type.tipo0 === "ghost" && "#7084ca" };
background: ${props => props.type.tipo0 === "ice" && "#48a497" };
background: ${props => props.type.tipo0 === "dragon" && "#004170;" };
background: ${props => props.type.tipo0 === "steel" && "#B7B9D0" };
background: ${props => props.type.tipo0 === "dark" && "#55433c" };
background: ${props => props.type.tipo0 === "flying" && "#A891EC" };
border-radius: 10px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 16px;
display: flex;
align-items: center;
color: #FFFFFF;
`

export const Type1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px 8px;

width: 46px;
height: 20px;

background: ${props => props.type.tipo0 === "grass" && "#729F92;" };
background: ${props => props.type.tipo0 === "fire" && "#EAAB7D;" };
background: ${props => props.type.tipo0 === "water" && "#71C3FF;" };
background: ${props => props.type.tipo0 === "bug" && "#76A866" };
background: ${props => props.type.tipo0 === "normal" && "#BF9762;" };
background: ${props => props.type.tipo0 === "poison" && "#d1a3d0" };
background: ${props => props.type.tipo0 === "electric" && "#ffc95e" };
background: ${props => props.type.tipo0 === "ground" && "#b6866f" };
background: ${props => props.type.tipo0 === "fairy" && "#bd7886" };
background: ${props => props.type.tipo0 === "fighting" && "#B0385A" };
background: ${props => props.type.tipo0 === "psychic" && "#e05e65" };
background: ${props => props.type.tipo0 === "rock" && "#9e8f65" };
background: ${props => props.type.tipo0 === "ghost" && "#7084ca" };
background: ${props => props.type.tipo0 === "ice" && "#48a497" };
background: ${props => props.type.tipo0 === "dragon" && "#004170;" };
background: ${props => props.type.tipo0 === "steel" && "#B7B9D0" };
background: ${props => props.type.tipo0 === "dark" && "#55433c" };
background: ${props => props.type.tipo0 === "flying" && "#A891EC" };
border-radius: 10px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 16px;
display: flex;
align-items: center;
color: #FFFFFF;
`

export const AboutDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
width: 312px;
height: 16px;
justify-content: center;
margin-left:25px;
margin-top: 10px;
`

export const StyledH4 = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: ${props => props.type.tipo0 === "grass" && "#729F92;" };
color: ${props => props.type.tipo0 === "fire" && "#EAAB7D;" };
color: ${props => props.type.tipo0 === "water" && "#71C3FF;" };
color: ${props => props.type.tipo0 === "bug" && "#76A866" };
color: ${props => props.type.tipo0 === "normal" && "#BF9762;" };
color: ${props => props.type.tipo0 === "poison" && "#d1a3d0" };
color: ${props => props.type.tipo0 === "electric" && "#ffc95e" };
color: ${props => props.type.tipo0 === "ground" && "#b6866f" };
color: ${props => props.type.tipo0 === "fairy" && "#bd7886" };
color: ${props => props.type.tipo0 === "fighting" && "#B0385A" };
color: ${props => props.type.tipo0 === "psychic" && "#e05e65" };
color: ${props => props.type.tipo0 === "rock" && "#9e8f65" };
color: ${props => props.type.tipo0 === "ghost" && "#7084ca" };
color: ${props => props.type.tipo0 === "ice" && "#48a497" };
color: ${props => props.type.tipo0 === "dragon" && "#004170;" };
color: ${props => props.type.tipo0 === "steel" && "#B7B9D0" };
color: ${props => props.type.tipo0 === "dark" && "#55433c" };
color: ${props => props.type.tipo0 === "flying" && "#A891EC" };
`

export const DivInfos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 0px;
gap: 1px solid black;
background-color: white;
width: 252px;
height: 48px;
column-gap: 1px solid grey;
margin: 0 auto  ;
`

export const Weight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0px;
gap: 8px;
border-right: 1px solid #E0E0E0;
`

export const StyledP = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 12px;
margin: 0 auto;

/* identical to box height, or 150% */
display: flex;
align-items: center;
text-align: center;

/* Medium Gray */
color: #666666;


`

export const Height = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0px;
gap: 8px;
border-right: 1px solid #E0E0E0;
`

export const Moves = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0px;
gap: 8px;
`

export const DivKg = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 0px;
gap: 8px;
justify-content: center;
text-align: center;

`

export const DivHg = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 0px;
gap: 8px;
justify-content: center;
text-align: center;

`

export const DivMoves = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
justify-content: center;
text-align: center;
`

export const DivMv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0px;
gap: 8px;
justify-content: center;
text-align: center;
font-size: 10px;
`

export const StyledInfo = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
flex-wrap: nowrap;
margin: 0 auto;
`

export const DivBaseStats = styled.div`
display: flex;
color: #74CB48;
flex-direction: row;
align-items: flex-start;
padding: 0px;
justify-content: center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: ${props => props.type.tipo0 === "grass" && "#729F92;" };
color: ${props => props.type.tipo0 === "fire" && "#EAAB7D;" };
color: ${props => props.type.tipo0 === "water" && "#71C3FF;" };
color: ${props => props.type.tipo0 === "bug" && "#76A866" };
color: ${props => props.type.tipo0 === "normal" && "#BF9762;" };
color: ${props => props.type.tipo0 === "poison" && "#d1a3d0" };
color: ${props => props.type.tipo0 === "electric" && "#ffc95e" };
color: ${props => props.type.tipo0 === "ground" && "#b6866f" };
color: ${props => props.type.tipo0 === "fairy" && "#bd7886" };
color: ${props => props.type.tipo0 === "fighting" && "#B0385A" };
color: ${props => props.type.tipo0 === "psychic" && "#e05e65" };
color: ${props => props.type.tipo0 === "rock" && "#9e8f65" };
color: ${props => props.type.tipo0 === "ghost" && "#7084ca" };
color: ${props => props.type.tipo0 === "ice" && "#48a497" };
color: ${props => props.type.tipo0 === "dragon" && "#004170;" };
color: ${props => props.type.tipo0 === "steel" && "#B7B9D0" };
color: ${props => props.type.tipo0 === "dark" && "#55433c" };
color: ${props => props.type.tipo0 === "flying" && "#A891EC" };
margin-top: 30px;
`

export const Stats = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0px;
width: 312px;
height: 100px;
`

export const StatsName = styled.div`
display: flex;
flex-direction: column;
`

export const StatsFont = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

/* identical to box height, or 160% */
display: flex;
flex-direction: column;
align-items: center;
text-align: right;
margin-left: 130px;

/* Type - Grass */
color: ${props => props.type.tipo0 === "grass" && "#729F92;" };
color: ${props => props.type.tipo0 === "fire" && "#EAAB7D;" };
color: ${props => props.type.tipo0 === "water" && "#71C3FF;" };
color: ${props => props.type.tipo0 === "bug" && "#76A866" };
color: ${props => props.type.tipo0 === "normal" && "#BF9762;" };
color: ${props => props.type.tipo0 === "poison" && "#d1a3d0" };
color: ${props => props.type.tipo0 === "electric" && "#ffc95e" };
color: ${props => props.type.tipo0 === "ground" && "#b6866f" };
color: ${props => props.type.tipo0 === "fairy" && "#bd7886" };
color: ${props => props.type.tipo0 === "fighting" && "#B0385A" };
color: ${props => props.type.tipo0 === "psychic" && "#e05e65" };
color: ${props => props.type.tipo0 === "rock" && "#9e8f65" };
color: ${props => props.type.tipo0 === "ghost" && "#7084ca" };
color: ${props => props.type.tipo0 === "ice" && "#48a497" };
color: ${props => props.type.tipo0 === "dragon" && "#004170;" };
color: ${props => props.type.tipo0 === "steel" && "#B7B9D0" };
color: ${props => props.type.tipo0 === "dark" && "#55433c" };
color: ${props => props.type.tipo0 === "flying" && "#A891EC" };
`

export const StatsNumber = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;

/* identical to box height, or 160% */
display: flex;
flex-direction: column;
align-items: center;

/* Dark Gray */
color: #212121;
margin-right: 40px;
`