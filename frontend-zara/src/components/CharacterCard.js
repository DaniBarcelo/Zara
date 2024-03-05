import Heart from "../assets/heart.png";
import FilledHeart from "../assets/filled_heart.png";
import { useNavigate } from "react-router-dom";
import { FavoriteContext, SelectedCharacterContext } from "../context/AppContext";
import { useContext } from "react";

export const CharacterCard = ({ character }) => {
    const navigate = useNavigate();

    const { favorites, setFavorites } = useContext(FavoriteContext);
    const { setCharacter } = useContext(SelectedCharacterContext);

    const clickFavorites = (character) => {
        if (favorites.find(favorite => favorite.id === character.id)) {
            setFavorites(favorites.filter(favorite => favorite.id !== character.id));
        } else {
            setFavorites([...favorites, character]);
        }
    }

    return (
        <>
            {character && <div
                key={character.id}
                style={{
                    display: "inline-grid",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "178px",
                    cursor: "pointer",
                }}
                onClick={() => {
                    setCharacter(character);
                    navigate(`/details`)
                }}
            >
                <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                    style={{
                        width: "172.5px",
                        height: "189.97px",
                        border: "none",
                        borderBottom: "4px solid #EC1D24",
                    }}
                />
                <div className="card" >
                    <div className="card2" >
                        <p
                            style={{
                                fontSize: "14px",
                                color: "white",
                                paddingLeft: "16px",
                            }}
                        >
                            {character.name}
                        </p>
                        {favorites.find(favorite => favorite.id === character.id) ? (
                            <img src={FilledHeart} alt="heart" style={{ width: "12px", height: "10.84px", paddingRight: "16px" }} onClick={(e) => { e.stopPropagation(); clickFavorites(character) }} />
                        ) : (
                            < img src={Heart} alt="heart" style={{ width: "12px", height: "10.84px", paddingRight: "16px" }} onClick={(e) => { e.stopPropagation(); clickFavorites(character) }} />
                        )}
                    </div>
                </div>
                <div
                    style={{
                        position: "relative",
                        bottom: 32,
                        left: 160,
                        width: "12.86px",
                        height: "12.86px",
                        backgroundColor: "white",
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%, 100% 10%)",
                        zIndex: 3
                    }}
                ></div>
            </div>}
        </>
    );
}