import React from 'react'
import { ContainerHeader, StyledButton, StyledGoBack, StyledImg } from './Styled'
import Logo from '../../../Assets/Logo.svg'
import { goBack } from '../../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom';

export default function HeaderPokedex() {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
        <StyledGoBack onClick={()=>goBack(navigate)}>⋘ Todos Pokémons</StyledGoBack>
        <StyledImg src={Logo}></StyledImg>
        <StyledButton>Excluir da Pokedex</StyledButton>
    </ContainerHeader>
  )
}
