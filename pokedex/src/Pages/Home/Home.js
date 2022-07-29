import React from 'react'
import Card from '../../Components/Card/Card'
import Header from '../../Components/Header/Header'
import { DisplayCards, PageNumber, Pagination, StyledH2, StyledH3 } from './Styled'
import { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToHomeBack, goToHomeNext } from '../../Routes/Coordinator'


export default function Home() {
  const { states, constants } = useContext(GlobalStateContext)
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    constants.getPokemons(params.number)
  }, [navigate]);



  return (
    <div>
      <Header />
      <StyledH2>Todos Pokémons</StyledH2>
      <DisplayCards>
        {states.pokemonsList.map((item, indice) => {
          return <Card
            key={item.name}
            url={item.url}
            name={item.name} />
        })}
      </DisplayCards>
      <StyledH3>Pages</StyledH3>
      <Pagination>
        <PageNumber onClick={()=>goToHomeBack(navigate, +params.number - +30)}>&laquo;</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 0)}>1</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 30)}>2</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 60)}>3</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 90)}>4</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 120)}>5</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 150)}>6</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 180)}>7</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 210)}>8</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 240)}>9</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, 270)}>10</PageNumber>
        <PageNumber onClick={()=>goToHomeNext(navigate, +params.number + +30)}>&raquo;</PageNumber>
      </Pagination>
    </div>
  )
}
