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
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
font-size: 35px;
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
`