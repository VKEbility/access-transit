import { checkForLoggedInUser } from '../../adapters/auth-adapter';
import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { listFavs, removeFav } from '../../adapters/fav-adapter';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { handleFavClick, handleUnFavClick } from "../Favorites/Favoriting";
// import TransitRouteCard from '../TransitRoutes/TransitRouteCard'; // Assuming you reuse the TransitCard from LandingPage

export default function FavoritesContainer() {
	// const me = checkForLoggedInUser();
	const { currentUser } = useContext(CurrentUserContext);
	// console.log(currentUser.id);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const fetchFavorites = async () => {
			try {
				const userFavorites = await listFavs(currentUser.id);
				setFavorites(userFavorites);
			} catch (error) {
				console.error('Error fetching favorites:', error);
			}
		};
		fetchFavorites();
	}, [currentUser.id]);

	// const handleUnFavClick = (e) => {
	//   e.preventDefault();
	//   console.log("USERID: ", user_id);
	//   removeFav(user_id, rt_stop_id);
	//   console.log('Unfavorited');
	// }

	return (
		<div className="favorites-container">
			<h2>Here are your favorite train stations!</h2>

			{favorites.length > 0 ? (
				favorites.map((favorite) => (
					// <TransitRouteCard key={route.transitId} route={route} onTimerEnd={() => handleTimerEnd(route.transitId)} />
					<>
						<div>
							<li key={favorite.rt_stop_id}> {favorite.stop_name} </li>
							<FaHeart aria-hidden="true" />
							{/* <div className="favorite-button" id="card-button">
                {isFavorite 
                  ? <FaHeart aria-hidden="true" />  // unfavoriting 
                  : <FaRegHeart aria-hidden="true" />   // favoriting 
                }
              </div> */}
						</div>
					</>
				))
			) : (
				// isFavorite = false
				<p>No favorites found.</p>
			)}
		</div>
	);
}
