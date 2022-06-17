import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { CardActions, Chip, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteContext } from "../../favorites/contexts/FavoriteContext";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  let navigate = useNavigate();
  const { setFavorites, favorites } = useContext(FavoriteContext);

  function HandleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  const addPokemonToFavorites = () => {
    setFavorites([...favorites, pokemon]);
  } 

  const removePokemonFromFavorites = () => {
    setFavorites(favorites.filter((poke) => poke.name !== pokemon.name));
  }

  const isFavorite = favorites.some((poke) => poke.name === pokemon.name);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        style={{height: 'auto'}}
        image={pokemon.sprites.front_default}
        alt=".."
        onClick={HandleClick} 
      />
      <CardHeader
        title={pokemon.name}
        subheader={pokemon.types.map((type) => (<Chip label={type.type.name} variant="outlined" />))}
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorites()} aria-label="add to favorites">
          <FavoriteIcon color={isFavorite ? `error` : `disabled`} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PokedexCard;
