import React from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { DisplayCards, StyledH2 } from './Styled'

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div>
    <Header/>
    <StyledH2>Todos Pokémons</StyledH2>
    <DisplayCards>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </DisplayCards>
    </div>
  )
}
