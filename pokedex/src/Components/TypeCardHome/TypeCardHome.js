import React from 'react'
import { PokemonType, PokemonType2 } from './Styled'
import Poison from '../../Assets/Poison.svg'
import Grass from '../../Assets/Grass.svg'

export default function TypeCardHome() {
  return (
    <div>
    <PokemonType>
      <img src={Poison}></img>
      Poison</PokemonType>
    <PokemonType2>
    <img src={Grass}></img>
      Grass</PokemonType2>
    </div>
  )
}
