import React from 'react'
import { ContainerHeader, StyledGoBack, StyledImg } from './Styled'
import Logo from '../../../Assets/Logo.svg'
import { goToHome } from '../../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

export default function HeaderPokedex() {
    const navigate = useNavigate()

  return (
    <ContainerHeader>
        <StyledGoBack onClick={()=>goToHome(navigate)}>⋘ Todos Pokémons</StyledGoBack>
        <StyledImg src={Logo}></StyledImg>
        <span></span>
    </ContainerHeader>
  )
}
