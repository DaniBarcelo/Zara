import SearchComponent from "../../components/SearchComponent";
import { useState, useEffect, useContext } from "react";
import Heart from "../../assets/heart.png";
import FilledHeart from "../../assets/filled_heart.png";
import { FavoriteContext } from "../../context/AppContext";
import './HomeView.css';
import { characterCard } from "../../components/CharacterCard";

export default function HomeView() {

    const [characters, setCharacters] = useState([]);
    const { favorites, setFavorites } = useContext(FavoriteContext);


    const getCharacters = async () => {
        const response = await fetch("http://localhost:3001/characters");
        const data = await response.json();
        setCharacters(data);
    }

    const clickFavorites = (character) => {
        if (favorites.find(favorite => favorite.id === character.id)) {
            setFavorites(favorites.filter(favorite => favorite.id !== character.id));
        } else {
            setFavorites([...favorites, character]);
        }
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div id="wrapper">
            <SearchComponent />
            <p>{characters.length} RESULTS </p>
            <div>
                {characters.map((character, characterIndex) => {
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