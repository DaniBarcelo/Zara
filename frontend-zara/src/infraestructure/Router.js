import HomeView from '../views/Home/HomeView';
import FavoritesView from '../views/Favorites/FavoritesView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

export default function Router() {

    function homeView() {
        return (
            <div>
                <Header />
                <HomeView />
            </div>
        )
    }

    function favoritesView() {
        return (
            <div>
                <Header />
                <FavoritesView />
            </div>
        )
    }

    function detailsView() {
        return (
            <div>
                <Header />
                <HomeView />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={homeView} />
                <Route exact path="/favorites" component={favoritesView} />
                <Route exact path="/details" component={detailsView} />
            </Switch>
        </BrowserRouter>
    )

}