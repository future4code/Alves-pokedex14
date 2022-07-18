import styled from "styled-components";
import BackgroundCard from '../../Assets/BackgroundCard.svg'

export const Container = styled.div`
width: 90%;
height: 17vw;
background-color: #729F92;
border-radius: 12px;
background-image: url(${BackgroundCard});
background-repeat: no-repeat;
background-position-x: 105px ;
background-size: 30vw 17vw;
margin-bottom: 56px;
`

export const StyledNumber = styled.h4`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
position: relative;
left: 23px;
top: 25px;
`

export const StyledName = styled.h3`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
position: relative;
left: 23px;
top: 20px;
`

export const PokemonType = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;
width: 88px;
height: 28px;
position: relative;
left: 23px;
top: 30px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
background: #AD61AE;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
align-items: center;
`

export const PokemonType2 = styled.span`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: relative;
width: 88px;
height: 28px;
left: 129px;
top: -10px;

background: #70B873;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
align-items: center;
margin-left: 7px;
`

export const StyledDetails = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
position: relative;
bottom: 155px;
left: 23px;
`

export const StyledPokemonImg = styled.img`
position: relative;
left: 14.5vw;
bottom: 19vh;
height: 30vh;
`

export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FFFFFF;
border-radius: 8px;
position: relative;
bottom: 190px;
left: 390px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;

/* identical to box height */

color: #0F0F0F;
`