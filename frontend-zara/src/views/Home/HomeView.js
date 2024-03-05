/* eslint-disable react-hooks/exhaustive-deps */
import SearchComponent from "../../components/SearchComponent";
import { useState, useEffect } from "react";
import './HomeView.css';
import { CharacterCard } from "../../components/CharacterCard";
import Header from "../../components/Header";

export default function HomeView() {

    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("");

    const getCharacters = async () => {
        if (search === "") {
            const response = await fetch("http://localhost:3001/characters");
            const data = await response.json();
            setCharacters(data);
        }
        else {
            const response = await fetch("http://localhost:3001/characters/" + search);
            const data = await response.json();
            setCharacters(data);
        }
    }

    useEffect(() => {
        getCharacters();
    }, [search]);

    return (
        <>
            <Header />
            {characters.lenght !== 0 && <div id="wrapper">
                <SearchComponent setSearch={setSearch} />
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
                                <CharacterCard character={character} />
                            </div>
                        );
                    })}
                </div>
            </div>}
        </>
    );
}