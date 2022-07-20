import styled from "styled-components";
import BackgroundCard from '../../Assets/BackgroundCard.svg'

export const MainContainer = styled.div`
min-width: 394px;
height: 165px;
background: #729F92;

border-radius: 12px;
padding: 25px 23px 20px 23px;
background-image: url(${BackgroundCard});
background-repeat: no-repeat;
background-position-x: 200px;
background-position-y: -10px;
background-size: 235.73px 245.73px;
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

export const PokemonTypePoison = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 83px;
height: 21px;

background: #AD61AE;
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

export const PokemonTypeFire = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 66px;
height: 26px;

background: #F44900;
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

export const PokemonTypeWater = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 89px;
height: 26px;

background: #33A4F5;
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

export const PokemonTypeBug = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 74px;
height: 26px;

background: #316520;
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

export const PokemonTypeNormal = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 98px;
height: 26px;

background: #8A8A8A;
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

export const PokemonTypeGrass = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 8px;
gap: 17px;

position: relative;
left: 107px;
width: 83px;
height: 21px;

background: #70B873;
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

export const PokemonTypeFlying = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: relative;
width: 87px;
height: 26px;
left: 107px;

background: #6892B0;
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
`

export const PokemonImage = styled.img`
position: relative;
width: 193px;
height: 193px;
bottom: 245px;
left: 217px;
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
`

