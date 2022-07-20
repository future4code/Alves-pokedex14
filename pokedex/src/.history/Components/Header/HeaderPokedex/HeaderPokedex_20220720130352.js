import React from 'react'
import { ContainerHeader, StyledButton, StyledGoBack, StyledImg } from './Styled'
import Logo from '../../Assets/Logo.svg'

export default function HeaderPokedex() {
  return (
    <ContainerHeader>
        <StyledGoBack>Todos Pokémons</StyledGoBack>
        <StyledImg src={Logo}></StyledImg>
        <span></span>
    </ContainerHeader>
  )
}
