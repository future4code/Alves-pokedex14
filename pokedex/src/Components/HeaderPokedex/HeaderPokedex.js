import React from 'react'
import { ContainerHeader, StyledButton, StyledImg } from './Styles'
import Logo from '../../Assets/Logo.svg'
import { useNavigate } from 'react-router-dom'

export default function HeaderPokedex() {
  const navigate =  useNavigate()

  const goToHomePage = () => {
    navigate(-1)
  }
  return (
    <ContainerHeader>
        <span></span>
        <StyledImg src={Logo}></StyledImg>
        <StyledButton onClick={goToHomePage}>
          Todos Pokémons
        </StyledButton>
    </ContainerHeader>
  )
}