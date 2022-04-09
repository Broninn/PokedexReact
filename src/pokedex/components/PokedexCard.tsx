import React from 'react'
import styled from 'styled-components'
import { PokemonListInterface } from '../../pokemon/services/listPokemons';
import { useNavigate } from "react-router-dom";


interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

const Card = styled.section`
  padding: 4em;
  border-radius: 1em;
  background: papayawhip;
`;

export const PokedexCard: React.FC<PokedexCardProps> = ({pokemon}) => {
  let navigate = useNavigate();

    function HandleClick() {
      navigate(`/pokemon/${pokemon.name}`)
    };
    return (
        <>
          <Card onClick={HandleClick} >
            {pokemon.name}
          </Card>
        </>
    )
}

export default PokedexCard;