import React from 'react'
import { ContainerHeader, StyledButton, StyledGoBack, StyledImg } from './Styled'
import Logo from '../../../Assets/Logo.svg'
import { goToHome } from '../../../Routes/Coordinator'

export default function HeaderPokedex() {
    const navigate = useNavigate()

  return (
    <ContainerHeader>
        <StyledGoBack>⋘ Todos Pokémons</StyledGoBack>
        <StyledImg src={Logo}></StyledImg>
        <span></span>
    </ContainerHeader>
  )
}
