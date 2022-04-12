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
      if (!name) return;

      getPokemonDetails(name).then((response) => 
      {
        setSelectedPokemonDetails(response)
        console.log(JSON.stringify(response))
      }
      
      )
      
    }, []);
    
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
               <img width="100%" height="auto" src={selectedPokemonDetails && selectedPokemonDetails.sprites.front_default} alt="" />
               <p>{selectedPokemonDetails && selectedPokemonDetails.abilities.map((pokemon,index) => {return ( <p key={index}>{pokemon.ability.name}</p>)})}</p>
            </Box>
            <Typography>
              {selectedPokemonDetails && selectedPokemonDetails.name}
            </Typography>            
              {selectedPokemonDetails && selectedPokemonDetails.types.map((type) => <Typography>{type.type.name}</Typography>)}
        </Container>
      </div>
    );
};

export default PokemonDetails;
