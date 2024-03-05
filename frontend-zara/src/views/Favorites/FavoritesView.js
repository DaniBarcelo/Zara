import SearchComponent from "../../components/SearchComponent";
import { useContext } from "react";
import { FavoriteContext } from "../../context/AppContext";
import './FavoritesView.css';
import { CharacterCard } from "../../components/CharacterCard";
import Header from "../../components/Header";
import { useState } from "react";


export default function FavoritesView() {

    const { favorites } = useContext(FavoriteContext);
    const [search, setSearch] = useState("");

    return (
        <>
            <Header />
            <div id="wrapper">
                <p id="favoritesTitle" >FAVORITES</p>
                <SearchComponent setSearch={setSearch} />
                <p>{favorites.filter(favorite => favorite.name.toUpperCase().includes(search.toUpperCase())).length} RESULTS </p>
                <div>
                    {favorites.map((character) => {
                        if (search !== "" && !character.name.toUpperCase().includes(search.toUpperCase())) {
                            return null;
                        }
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
                                {<CharacterCard character={character} />}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}