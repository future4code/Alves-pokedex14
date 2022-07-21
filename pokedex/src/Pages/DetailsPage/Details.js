import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import HeaderDetails from '../../Components/Header/HeaderDetails/HeaderDetails'
import GlobalStateContext from '../../Global/GlobalStateContext';
import { AboutDiv, ContainerCardDetails, DisplayCards, DivDetails, DivInfos, DivKg, DivTypes, Height, Moves, StyledH2, StyledH3, StyledH4, StyledId, StyledP, StyledPokemonImage, StyledTop, Type0, Type1, Weight, DivHg, StyledInfo, DivMoves, DivMv, DivBaseStats, Stats, StatsFont, StatsNumber } from './Styled';
import WeightSVG from '../../Assets/Weight.svg'
import Ruler from '../../Assets/Ruler.svg'

export default function Details() {
  const { states, constants } = useContext(GlobalStateContext)
  const params = useParams();
  const navigate = useNavigate();
  const abilities = states.pokemonPage.abilities
  
  console.log(abilities)

  useEffect(() => {
    constants.getDetailsPage(params.id)
  }, [navigate]);

  const type = {}

  states.pokemonTypes.forEach((element, index) => {
    type['tipo' + index] = element.type.name
  })

  // console.log(type)
  console.log(states.pokemonPage)

  return (
    <div>
      <HeaderDetails />
      <StyledH2>Details</StyledH2>
      <DisplayCards>

        <ContainerCardDetails>

          <StyledTop>
            <StyledH3>
              {states.pokemonPage.name}
            </StyledH3>
            <StyledId>
              #{states.pokemonPage.id}
            </StyledId>
          </StyledTop>

          <StyledPokemonImage src={states.pokemonPage.sprites && states.pokemonPage[`sprites`][`other`][`official-artwork`][`front_default`]} ></StyledPokemonImage>

          <DivDetails>
            <DivTypes>
              <Type0>
                {type.tipo0}
              </Type0>
              
              {type.tipo1 ? <Type1>{type.tipo1}</Type1> : <span></span>}
            </DivTypes>
            <AboutDiv>
              <StyledH4>
                About
              </StyledH4>
            </AboutDiv>

            <DivInfos>
              <Weight>
                <DivKg>
                  <img src={WeightSVG}></img>
                  {states.pokemonPage.weight} kg
                </DivKg>
                <StyledP>Weight</StyledP>
              </Weight>

              <Height>
                <DivHg>
                  <img src={Ruler}></img>
                  {states.pokemonPage.height} cm
                </DivHg>
                <StyledP>Height</StyledP>
              </Height>

              <Moves>
                <DivMoves>
                  <DivMv>
                    {abilities && abilities.map((item, indice) => {
                        return item.ability.name + ', '
                    })}
                  </DivMv>
                  <StyledP>Moves</StyledP>
                </DivMoves>
              </Moves>
            </DivInfos>
            <DivBaseStats>Base Stats</DivBaseStats>
            <Stats>
              <StatsFont>
                HP
                <br />
                ATK
                <br />
                DEF
                <br />
                SATK
                <br />
                SDEF
                <br />
                SPD
              </StatsFont>
              00
              <br />
              00
              <br />
              00
              <br />
              00
              <br />
              00
              <br />
              00
              <StatsNumber>

              </StatsNumber>

              <div>

              </div>
            </Stats>
          </DivDetails>


        </ContainerCardDetails>

      </DisplayCards>
    </div>
  )
}
