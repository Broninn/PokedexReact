import React, { useEffect, useState } from 'react';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import AppBar from '@mui/material/AppBar';
import {Box, CircularProgress, Grid, LinearProgress} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PokedexCard from './components/PokedexCard'
import { PokemonDetail } from '../pokemon/interfaces/pokemonDetail';
import { useQuery } from 'react-query';

interface PokedexProps {

}

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
    //const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)
    const { isLoading, isRefetching } = useQuery(`listPokemons`,listPokemons);

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
                    {isRefetching && <LinearProgress variant='indeterminate' color='secondary'></LinearProgress>}
                </AppBar>
            </Box>
            <Container maxWidth="md">
                {!isLoading ? (
                    <>
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
                    </>
                ) : (
                    <div><CircularProgress /></div>
                )}
            </Container>
        </div>
    )
}

export default Pokedex;