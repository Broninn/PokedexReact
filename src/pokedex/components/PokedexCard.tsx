import React from "react";
import { PokemonListInterface } from "../../pokemon/services/listPokemons";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { OpenInBrowser } from "@mui/icons-material";
import { Box, Chip } from "@mui/material";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

// const Card = styled.section`
//   padding: 4em;
//   border-radius: 1em;
//   background: papayawhip;
// `;

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
        alt="Paella dish"
      />
      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => (<Chip label={type.type.name} variant="outlined" />))}
      />
    </Card>
  );
};

export default PokedexCard;
