/* eslint-disable react-hooks/exhaustive-deps */
import './DetailsView.css';
import { useContext, useEffect } from "react";
import { FavoriteContext, SelectedCharacterContext } from "../../context/AppContext";
import Header from "../../components/Header";
import Heart from "../../assets/heart.png";
import FilledHeart from "../../assets/filled_heart.png";
import { useState } from "react";

export default function DetailsView() {

    const { favorites, setFavorites } = useContext(FavoriteContext);
    const { character } = useContext(SelectedCharacterContext);
    const [comics, setComics] = useState([]);

    const clickFavorites = (character) => {
        if (favorites.find(favorite => favorite.id === character.id)) {
            setFavorites(favorites.filter(favorite => favorite.id !== character.id));
        } else {
            setFavorites([...favorites, character]);
        }
    }

    const getComics = async () => {
        const response = await fetch("http://localhost:3001/characters/" + character.id + "/comics");
        const data = await response.json();
        setComics(data);
    }

    useEffect(() => {
        getComics();
    }, []);

    return (
        <>
            <Header />
            <div id="banner">
                <div id="bannerContainer" >
                    <div id="bannerNameContainer">
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            id="bannerImage"
                        />
                    </div>
                    <div>
                        <div id="bannerNameContainer">
                            <p id="bannerText" >{character.name.toUpperCase()}</p>
                            {favorites.find(favorite => favorite.id === character.id) ? (
                                <img src={FilledHeart} alt="heart" style={{ width: "24px", height: "24.68px", paddingRight: "16px", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); clickFavorites(character) }} />
                            ) : (
                                < img src={Heart} alt="heart" style={{ width: "24px", height: "24.68px", paddingRight: "16px", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); clickFavorites(character) }} />
                            )}
                        </div>
                        <p id="bannerDescription" >{character.description}</p>
                    </div>
                </div>
                <div id="bannerCut" />
            </div>
            <div id="content">
                <div id="comicsDiv" >
                    <p id="comicsTitle" >COMICS</p>
                    <div className="comicGallery">
                        {comics.slice(0, 20).map((comic) => (
                            <div key={comic.id}>
                                <img
                                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                    alt={comic.title}
                                    className="comic-image"
                                />
                                <div id="comicInfo">
                                    <p id="comicTitle">{comic.title}</p>
                                    <p id="comicDate">{new Date(comic.dates.find(date => date.type === 'onsaleDate').date).getFullYear()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}