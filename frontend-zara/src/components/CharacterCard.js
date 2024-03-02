import Heart from "../assets/heart.png";
import FilledHeart from "../assets/filled_heart.png";

export const characterCard = (character, favorites, clickFavorites) => {
    return (
        <div
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
                console.log("click details");
            }}
        >
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                style={{
                    width: "172.5px",
                    height: "189.97px",
                    border: "none",
                    borderBottom: "4px solid red",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "172.5px",
                    height: "56px",
                    backgroundColor: "black",
                    marginBottom: "20px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",

                }}
            >
                <p
                    style={{
                        fontSize: "14px",
                        color: "white",
                        paddingLeft: "16px",
                    }}
                >
                    {character.name}
                </p>
                {/* if character is in favorites, show filled heart */}
                {favorites.find(favorite => favorite.id === character.id) ? (
                    <img src={FilledHeart} alt="heart" style={{ width: "12px", height: "10.84px", paddingRight: "16px" }} onClick={(e) => { e.stopPropagation(); clickFavorites(character) }} />
                ) : (
                    < img src={Heart} alt="heart" style={{ width: "12px", height: "10.84px", paddingRight: "16px" }} onClick={(e) => { e.stopPropagation(); clickFavorites(character) }} />
                )}
            </div>
        </div>
    );
}