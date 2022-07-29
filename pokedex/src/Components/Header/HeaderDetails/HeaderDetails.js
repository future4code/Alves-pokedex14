import React, { useContext } from 'react'
import { ContainerHeader, StyledButton, StyledGoBack, StyledImg } from './Styled'
import Logo from '../../../Assets/Logo.svg'
import { goBack } from '../../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from '../../../Global/GlobalStateContext';

export default function HeaderPokedex(props) {
  const { states } = useContext(GlobalStateContext)
  const navigate = useNavigate();
  let cachePokedex = JSON.parse(localStorage.getItem('pokedex cache'));
  
  const deletePokemon = (id) => {
    const confirmBox = window.confirm(
      `You really want to remove ${props.name} from your pokedex?`
  )
  if (confirmBox === true) {
    const novaLista = cachePokedex && cachePokedex.filter((pokemon) => {
      return pokemon.id !== id
    })
    states.setPokedex(novaLista)
    localStorage.setItem('pokedex cache', JSON.stringify(novaLista))
    cachePokedex = novaLista;
    alert("Pokemon excluido da Pokedex com sucesso!")
  }
  }

  const renderButton = () => {
    if (window.location.pathname.includes("/pokedex/detail")) {
      return <StyledButton onClick={()=>deletePokemon(props.id)}>Excluir da Pokedex</StyledButton>
    }
  }
  

  return (
    <ContainerHeader>
      <StyledGoBack onClick={() => goBack(navigate)}>⋘ Todos Pokémons</StyledGoBack>
      <StyledImg src={Logo}></StyledImg>
      {renderButton()}
    </ContainerHeader>
  )
}
