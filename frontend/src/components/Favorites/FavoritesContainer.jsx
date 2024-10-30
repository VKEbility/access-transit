import { checkForLoggedInUser } from '../../adapters/auth-adapter';
import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {listFavs, addFav, removeFav } from '../../adapters/fav-adapter';
import { FaRegHeart, FaHeart} from "react-icons/fa";
// import TransitRouteCard from '../TransitRoutes/TransitRouteCard'; // Assuming you reuse the TransitCard from LandingPage
// import { useFavorites } from '../FavoriteService';

export default function FavoritesContainer() {
  const me = checkForLoggedInUser();
  const { currentUser } = useContext(CurrentUserContext);
  // console.log(user);
  // console.log(me);
  // console.log(currentUser.id);

  // const { favorites, toggleFavorite } = useFavorites(); // Get the favorites and toggleFavorite from the hook
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userFavorites = await listFavs(currentUser.id);
        setFavorites(userFavorites);
      }
      catch(error) {
        console.error("Error fetching favorites:", error);
      }
    }
    fetchFavorites();
  }, [currentUser.id]);
  
  // const fetchFavorites = await listFavs(currentUser.id);
  // console.log(fetchFavorites);
  
  // const handleFavoriteClick = (e) => {
  //   e.preventDefault();
  //   console.log("USERID", user_id);
  //   console.log("HELLO", equipmentNo);
  //   addFav(user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon);
  //   console.log('Liked');
  // }

  // return <h1>Hello</h1>
  
  return (
    <div className="favorites-container">
      <h2>Here are your favorite train stations!</h2>
      
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          // <TransitRouteCard key={route.transitId} route={route} onTimerEnd={() => handleTimerEnd(route.transitId)} />
          <>
            <div>
              <li key={favorite.rt_stop_id}> {favorite.stop_name} </li> 
              {/* <div onClick={toggleFavorite} className="favorite-button" id="card-button">
                {isFavorite ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
              </div> */}
              {isFavorite(favorite.rt_stop_id) 
                ? <FaHeart aria-hidden="true" /> 
                : <FaRegHeart aria-hidden="true" type="button" onClick={()}/>}
            </div>
          </>
        ))
      ) : (
        <p>No favorites found.</p>
      )}
    </div>
  );
}