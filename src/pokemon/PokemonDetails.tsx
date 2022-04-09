import React, { useEffect, useState } from 'react';
import { PokemonDetail } from './interfaces/pokemonDetail';
import AppBar from '@mui/material/AppBar';
import {Box, Grid, IconButton} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from './services/getPokemonDetails';



interface PokemonDetailsProps {

}



export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const { name } = useParams();
    const [ selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail>()

    //Estado de verificação ao clicar em um pokemon, mostrar as informações da API
    useEffect(() => {
    //   if (!name) return;

    //   getPokemonDetails(name).then((response) => 
    //   {
    //     setSelectedPokemonDetails(response)
    //     console.log(JSON.stringify(response))
    //   }
      
    //   )
    getPokemon()
      
    }, []);

    const getPokemon = async () => {
        try {
            const data = await getPokemonDetails('pikachu');
            console.log(data)
            setSelectedPokemonDetails(data)
        } catch (error) {
            
        }
    }
    
    return (
      <div>
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
                { name }
            </Typography>
            </Toolbar>
        </AppBar>
        <Container maxWidth="md">
            <Box mt={2}>
                {/* <p>{JSON.stringify(selectedPokemonDetails)}</p> */}
                {/* {selectedPokemonDetails?.abilities ? (
                <span>{selectedPokemonDetails?.abilities.map((pokemon,index) => {return ( <p>{pokemon.ability}</p>)})}</span>
                ) : null} */}
                {/* <p>{selectedPokemonDetails?.name}</p> */}
            </Box>
        </Container>
      </div>
    );
};

export default PokemonDetails;
