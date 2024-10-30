// import FavoritesContainer from "./Favorites/FavoritesContainer"
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { listFavs, addFav, removeFav } from '../../adapters/fav-adapter';

export default function Favoriting() {
    // const isFavorite = () => {

    // }

    // const handleUnFavoritingClick = (e) => {
    //   e.preventDefault();
    //   console.log("USERID: ", user_id);
    //   removeFav(user_id, rt_stop_id);
    //   console.log('Unfavorited');
    // }

    // // const handleFavoritingClick = (e) => {
    // //   e.preventDefault();
    // //   console.log("USERID: ", user_id);
    // //   addFav(user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon);
    // //   console.log('Favorited');
    // // }
}