import styled from "styled-components";

export const ContainerHeader = styled.header`
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
min-height: 12vh;
width: 100vw;
justify-content: center;
@media (max-width: 880px){
    display: flex;
}
`

export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
background: #33A4F5;
border-radius: 8px;
min-width: 15vw;
height: 74px;
margin: 0 auto;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
border: none;
cursor: pointer;
:hover{
    background: #74bbef;
}
@media (max-width: 517px){
    height: 54px;
    min-width: 13vw;
}
`

export const StyledImg = styled.img`
margin: 0 auto;

@media (max-width: 517px){
    height: 11vh;
}
`