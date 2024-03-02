import './App.css';
import Router from './infraestructure/Router';
import { useState } from 'react';
import { FavoriteContext } from './context/AppContext';

function App() {

  const [favorites, setFavorites] = useState([]);
  const value = { favorites, setFavorites };

  return (
    <FavoriteContext.Provider value={value}>
      <Router />
    </FavoriteContext.Provider>
  );
}

export default App;
