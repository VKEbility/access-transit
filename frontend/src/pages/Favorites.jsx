// import React from 'react';
// import { useFavorites } from '../components/FavoriteService'; // Use the custom hook
// import TransitCard from '../components/TransitCard'; // Assuming you reuse the TransitCard from LandingPage

// export default function Favorites() {
//   const { favorites, toggleFavorite } = useFavorites(); // Get the favorites and toggleFavorite from the hook
//   const trainData = []; // You should replace this with your actual train data source
//   const loadedTrainIcons = []; // Replace this with the actual loaded icons

//   return (
//     <div id="favorites-page">
//       <header>
//         <h1>Your Favorite Transit Cards</h1>
//       </header>

//       <div id="favorites-container">
//         {favorites.size === 0 ? (
//           <p>No favorites yet.</p>
//         ) : (
//           Array.from(favorites).map((favIdx) => (
//             <TransitCard
//               key={favIdx}
//               idx={favIdx}
//               iconPath={loadedTrainIcons[favIdx]} // Dynamically load icon based on favorite index
//               cardColor="#FFFFFF" // White background for favorite cards
//               stationName={trainData[favIdx]?.stationName || 'N/A'}
//               direction={trainData[favIdx]?.direction || 'Unknown'}
//               accessibility={trainData[favIdx]?.accessibility || {}}
//               isFavorite={true} // Always show filled star since it's in favorites
//               toggleFavorite={() => toggleFavorite(favIdx)} // Remove from favorites if clicked
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useFavorites } from '../components/FavoriteService'; // Use the custom hook
import TransitCard from '../components/TransitCard'; // Assuming you reuse the TransitCard from LandingPage
import { addFav, removeFav, listFavs } from '../adapters/fav-adapter'; // Import your API functions

export default function Favorites({ user_id }) {
  const { favorites, toggleFavorite } = useFavorites(); // Get the favorites and toggleFavorite from the hook
  const [trainData, setTrainData] = useState([]); // Replace with your actual train data source
  const [loadedTrainIcons, setLoadedTrainIcons] = useState([]); // Replace with actual icons
  const [loading, setLoading] = useState(true); // For handling loading state

  useEffect(() => {
    // Fetch favorites when the component is mounted
    async function fetchFavorites() {
      const favs = await listFavs(user_id);
      setTrainData(favs); // Assume favs contains the train data
      // Optionally, set icons based on the fetched train data
      setLoading(false); // Loading complete
    }
    fetchFavorites();
  }, [user_id]);

  // Handle favorite toggle
  const handleFavoriteToggle = async (favIdx) => {
    const isFavorite = favorites.has(favIdx);
    const favoriteData = trainData[favIdx]; // Data related to the train card

    if (isFavorite) {
      await removeFav({ user_id, gtfs_complex_id: favoriteData?.gtfs_complex_id }); // Remove from backend
    } else {
      await addFav({
        user_id,
        gtfs_complex_id: favoriteData?.gtfs_complex_id,
        rt_stop_id: favoriteData?.rt_stop_id,
        stop_name: favoriteData?.stop_name,
        gtfs_lon: favoriteData?.gtfs_lon,
        gtfs_lat: favoriteData?.gtfs_lat
      }); // Add to backend
    }

    toggleFavorite(favIdx); // Update frontend state
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div id="favorites-page">
      <header>
        <h1>Your Favorite Transit Cards</h1>
      </header>

      <div id="favorites-container">
        {favorites.size === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          Array.from(favorites).map((favIdx) => (
            <TransitCard
              key={favIdx}
              idx={favIdx}
              iconPath={loadedTrainIcons[favIdx]} // Dynamically load icon based on favorite index
              cardColor="#FFFFFF" // White background for favorite cards
              stationName={trainData[favIdx]?.stop_name || 'N/A'}
              direction={trainData[favIdx]?.direction || 'Unknown'}
              accessibility={trainData[favIdx]?.accessibility || {}}
              isFavorite={true} // Always show filled star since it's in favorites
              toggleFavorite={() => handleFavoriteToggle(favIdx)} // Handle toggling
            />
          ))
        )}
      </div>
    </div>
  );
}