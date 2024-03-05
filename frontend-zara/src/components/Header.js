import { useNavigate  } from "react-router-dom";
import Logo from "../assets/logo.png";
import FilledHeart from "../assets/filled_heart.png";
import { FavoriteContext } from "../context/AppContext";
import { useContext } from "react";


const Header = () => {
    const navigate = useNavigate ();
    const { favorites } = useContext(FavoriteContext);
    return (
        <div id="header">
            <img src={Logo} alt='logo' onClick={() => { navigate('/') }} style={{ width: "130px", height: "52px", cursor: "pointer" }} />
            <div id="favoritesContainer" onClick={() => { navigate("/favorites") }}>
                <img src={FilledHeart} alt='favorites' style={{ width: "24px", height: "21.68px" }} />
                <p id="favoritesNumber">{favorites.length}</p>
            </div>
        </div>
    )
};

export default Header;
