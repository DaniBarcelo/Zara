import { createContext } from 'react';

export const FavoriteContext = createContext({
    favorites: [],
    setFavorites: () => {}
  });

  export const SelectedCharacterContext = createContext({
    character: {},
    setCharacter: () => {}
  });