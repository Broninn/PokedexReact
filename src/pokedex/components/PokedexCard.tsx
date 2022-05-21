import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { Chip } from "@mui/material";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  let navigate = useNavigate();

  function HandleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }
  return (
    <Card onClick={HandleClick} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        style={{height: 'auto'}}
        image={pokemon.sprites.front_default}
        alt=".."
      />
      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => (<Chip label={type.type.name} variant="outlined" />))}
      />
    </Card>
  );
};

export default PokedexCard;
