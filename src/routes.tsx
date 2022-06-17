
import React from 'react';
import { Route, Routes } from "react-router-dom";
import FavoriteScreen from './favorites/contexts/FavoriteScreen';
import Pokedex from "./pokedex/Pokedex";
import PokemonDetails from './pokemon/PokemonDetails';

interface RoutesProps {

}

export const RoutesPoke: React.FC<RoutesProps> = () => {
    return (
        <>
            <Routes>                
                <Route path="/" element={<Pokedex />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />
                <Route path="/favoritos" element={<FavoriteScreen />} />
            </Routes>
        </>
    )
}

export default RoutesPoke;