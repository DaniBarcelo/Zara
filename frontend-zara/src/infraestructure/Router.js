import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from '../views/Home/HomeView';
import FavoritesView from '../views/Favorites/FavoritesView';
import DetailsView from '../views/Details/DetailsView';

export default function MyRouter(routerProps) {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomeView />} {...routerProps} />
                <Route exact path="/favorites" element={<FavoritesView />} {...routerProps} />
                <Route exact path="/details" element={<DetailsView />} {...routerProps} />
            </Routes>
        </Router>
    )

}