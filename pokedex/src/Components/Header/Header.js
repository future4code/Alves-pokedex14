import React from 'react'
import { ContainerHeader, StyledButton, StyledImg } from './Styled'
import Logo from '../../Assets/Logo.svg'

import { goToPokedex } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()


  return (
    <ContainerHeader>
        <span></span>
        <StyledImg alt='pokemon logo' src={Logo}></StyledImg>
        <StyledButton onClick={()=>goToPokedex(navigate)}>Pokedex</StyledButton>
    </ContainerHeader>
  )
}
