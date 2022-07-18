import React from 'react'
import { ContainerHeader, StyledButton, StyledImg } from './Styled'
import Logo from '../../Assets/Logo.svg'

export default function Header() {
  return (
    <ContainerHeader>
        <span></span>
        <StyledImg src={Logo}></StyledImg>
        <StyledButton>Pokedex</StyledButton>
    </ContainerHeader>
  )
}
