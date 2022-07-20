import styled from "styled-components";

export const ContainerHeader = styled.header`
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
min-height: 12vh;
width: 100vw;
justify-content: center;
`

export const StyledGoBack = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;

/* identical to box height */
text-decoration-line: underline;
border: none;
background-color: white;
color: #1A1A1A;
`

export const StyledImg = styled.img`
margin: 0 auto;

`

export const StyledButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
background: #FF6262;
border-radius: 8px;
width: 226px;
height: 57px;
margin: 0 auto;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
border: none;
`