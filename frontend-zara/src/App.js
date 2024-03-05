import './App.css';
import MyRouter from './infraestructure/Router';
import { useState } from 'react';
import { FavoriteContext, SelectedCharacterContext } from './context/AppContext';

function App() {

  const [favorites, setFavorites] = useState([]);
  const valueFavorites = { favorites, setFavorites };

  const [character, setCharacter] = useState({});
  const valueCharacter = { character, setCharacter };

  return (
    <FavoriteContext.Provider value={valueFavorites}>
      <SelectedCharacterContext.Provider value={valueCharacter}>
        <MyRouter />
      </SelectedCharacterContext.Provider>
    </FavoriteContext.Provider>
  );
}

export default App;
