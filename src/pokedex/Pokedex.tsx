import React, { useEffect, useState } from 'react';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import AppBar from '@mui/material/AppBar';
import {Box, Grid} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PokedexCard from './components/PokedexCard'


interface PokedexProps {

}

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)

    useEffect(() => {
        //Como verificar se a API está ok! axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => console.log(response))
        listPokemons().then((response) => setPokemons(response.results))
    }, []);

    
    
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
                        Pokedex
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container maxWidth="md">
                <Box mt={2}>
                    <Grid container spacing={2}>
                        {pokemons.map((pokemon) => (
                            <>
                                <Grid item xs={6} lg={3}>
                                    <PokedexCard pokemon={pokemon} />
                                </Grid>
                            </>
                        ))}
                        
                        
                    </Grid>
                    
                </Box>
            </Container>
           </div>
    )
}

export default Pokedex;