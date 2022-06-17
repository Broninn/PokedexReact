import React, { useState } from 'react';
import { PokemonDetail } from '../../pokemon/interfaces/pokemonDetail';

interface FavoriteContextProps {
  favorites: PokemonDetail[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonDetail[]>>;
}

type Props = {
  children?: React.ReactNode
};

const INITIAL_FAVORITES_VALUE: PokemonDetail[] = [];

export const FavoriteContext = React.createContext<FavoriteContextProps>({
  favorites: INITIAL_FAVORITES_VALUE,
  setFavorites: () => console.warn(`setFavorites is not ready`),
});

export const FavoriteProvider: React.FC<Props> = ({children}) => {
  const [favorites, setFavorites] = useState<PokemonDetail[]>(INITIAL_FAVORITES_VALUE);
    return (
      <FavoriteContext.Provider value={{
        favorites,
        setFavorites,
      }} >
        {children}
      </FavoriteContext.Provider>
    );
};

