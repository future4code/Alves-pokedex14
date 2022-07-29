import styled from "styled-components";

export const StyledH2 = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
margin-top: 60px;
margin-left: 40px;
margin-bottom: 2px;
@media (max-width: 970px){
    text-align: center;
}
@media screen and (min-device-width : 320px) and (max-device-width : 520px) {
font-size: 35px;
margin-right: 220px;
line-height: 40px;
}
`

export const DisplayCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items: center;
align-items: center;
margin-top: 54px;
margin-left: 30px;
margin-right: 30px;
gap: 40px;

@media (max-width: 1430px){
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 949px){
    grid-template-columns: 1fr;
}

@media (max-width: 574px){
    display: flex;
    flex-direction: column;
    margin-right: 100px;
    margin-left: 40px;
}
`

export const StyledH3 = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 72px;
color: #FFFFFF;
margin-top: 60px;
margin-left: 40px;
margin-bottom: 2px;
text-align: center;
@media (max-width: 574px){
    text-align: start;
}
`

export const Pagination = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 2px;
margin-bottom: 3vh;
@media (max-width: 574px){
    padding: 8px 7px;
font-size: 20px;
justify-content: flex-start;
}
`

export const PageNumber = styled.a`
color: white;
font-family: 'Poppins';
float: left;
padding: 8px 16px;
font-size: 22px;
text-decoration: none;
transition: background-color .3s;
border: 1px solid #ddd;
border-radius: 5px;
@media (max-width: 574px){
    padding: 8px 6.9px;
}
cursor: pointer;
:active{
    background-color: red;
  color: white;
}
:hover:not(.active) {
    background-color: #ffc400;
}
`