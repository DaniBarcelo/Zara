import SearchComponent from "../../components/SearchComponent";
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../../context/AppContext";
import './FavoritesView.css';
import { characterCard } from "../../components/CharacterCard";

export default function FavoritesView() {

    const { favorites, setFavorites } = useContext(FavoriteContext);

    const clickFavorites = (character) => {
        if (favorites.find(favorite => favorite.id === character.id)) {
            setFavorites(favorites.filter(favorite => favorite.id !== character.id));
        } else {
            setFavorites([...favorites, character]);
        }
    }

    return (
        <div id="wrapper">
            <SearchComponent />
            <p>{favorites.length} RESULTS </p>
            <div>
                {favorites.map((character, characterIndex) => {
                    return (
                        <div
                            key={character.id}
                            style={{
                                display: "inline",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            {characterCard(character, favorites, clickFavorites)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}