import React, { useEffect, useState } from 'react';
import { PokemonDetail } from './interfaces/pokemonDetail';
import AppBar from '@mui/material/AppBar';
import {Box, Button, Grid, IconButton} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from './services/getPokemonDetails';
import { useNavigate } from 'react-router';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const navigate = useNavigate();
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

    function handleClick() {
      navigate('/')
    }
    
    return (
      <div>
        <AppBar position="static">
            <Toolbar>
              <Button onClick={handleClick} style={{color:"white" }}>
                Voltar
              </Button>
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
            </Box>
            <Typography variant='h2'>
              {selectedPokemonDetails && selectedPokemonDetails.species.name}
            </Typography>
            <Box display="flex" flexDirection={'row'} >
              <Typography>
                Espécie:
              </Typography>
              <Typography>
                {selectedPokemonDetails && selectedPokemonDetails.species.name}
              </Typography>
            </Box>
            <Box display="flex" flexDirection={'row'} >
              <Typography>
                Altura:
              </Typography>
              <Typography>
                {selectedPokemonDetails && selectedPokemonDetails.height}
              </Typography>
            </Box>
            <Box display="flex" flexDirection={'row'} >
              <Typography>
                Peso:
              </Typography>
              <Typography>
                {selectedPokemonDetails && selectedPokemonDetails.weight}
              </Typography>
            </Box>
            <Box display="flex" flexDirection={'row'} >
              <Typography>
                Habilidades:
              </Typography>
              <Typography>
                {selectedPokemonDetails && selectedPokemonDetails.abilities.map((pokemon,index) => {return ( <Typography key={index}>{pokemon.ability.name}</Typography>)})}
              </Typography>
            </Box>
                {/* {selectedPokemonDetails && selectedPokemonDetails.types.map((type) => <Typography>{type.type.name}</Typography>)} */}
                

        </Container>
      </div>
    );
};

export default PokemonDetails;
