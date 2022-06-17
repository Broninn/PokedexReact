import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Grid} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import PokedexCard from '../../pokedex/components/PokedexCard';
import { PokemonDetail } from '../../pokemon/interfaces/pokemonDetail';
import { FavoriteContext } from './FavoriteContext';

interface FavoriteScreenProps {

}

export const FavoriteScreen: React.FC<FavoriteScreenProps> = () => {
    const { favorites } = useContext(FavoriteContext);
    const navigate = useNavigate();
    //const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            FavoriteScreen
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container maxWidth="md">
              <Grid container spacing={2}>
                  {favorites?.map((pokemon: PokemonDetail) => (
                    <Grid item xs={6} lg={3}>
                        <PokedexCard pokemon={pokemon} />
                    </Grid>
                  ))}
              </Grid>
            </Container>
        </div>
    )
}

export default FavoriteScreen;