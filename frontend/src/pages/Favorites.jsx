// export default function Favorites() {
//     return (
//       <>
//       <h2 id="section-title">Favorites</h2>
//       <div id="favorite-card-container">
//           <div id="favorites-container">
//             <div id="favorite-card">
//              <p></p>
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//             <div id="favorite-card">
//             {/* favorite stations */}
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   };
// import { useEffect, useState } from 'react';

// export default function Favorites() {
//   const [favorites, setFavorites] = useState([]);

//   // Fetch favorites on component mount
//   useEffect(() => {
//     fetch('/favorites', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         setFavorites(data.favorites); // Set the fetched favorites to state
//       } else {
//         console.error("Failed to load favorites:", data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Error loading favorites:', error);
//     });
//   }, []); // Empty array ensures this runs only once when component mounts

//   return (
//     <>
//       <h2 id="section-title">Favorites</h2>
//       <div id="favorite-card-container">
//         <div id="favorites-container">
//           {favorites.length > 0 ? (
//             favorites.map((favorite, index) => (
//               <div key={index} id="favorite-card">
//                 <p>Train: {favorite.trainId}</p>
//                 <p>Station: {favorite.station}</p>
//                 {/* You can add additional info if needed */}
//               </div>
//             ))
//           ) : (
//             <p>No favorite stations added yet.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
// import { useFavorites } from './FavoritesContext'; // Adjust the import path

// export default function Favorites() {
//   const { favorites } = useFavorites();
//   const [trainData, setTrainData] = useState([]);

//   useEffect(() => {
//     fetchTrainData(); // Fetch train data to match with favorites
//   }, []);

//   const fetchTrainData = async () => {
//     // Same as before to fetch train data
//     // After fetching, you can set the trainData state
//   };

//   return (
//     <>
//       <h2 id="section-title">Favorites</h2>
//       <div id="favorite-card-container">
//         <div id="favorites-container">
//           {Array.from(favorites).length > 0 ? (
//             Array.from(favorites).map((index) => (
//               <div key={index} id="favorite-card">
//                 <p>Train: {trainData[index]?.direction || 'Unknown'}</p>
//                 <p>Station: {trainData[index]?.stationName || 'N/A'}</p>
//                 {/* You can add additional info if needed */}
//               </div>
//             ))
//           ) : (
//             <p>No favorite stations added yet.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// import React from 'react';
// import { useFavorites } from '../components/FavoriteService'; // Use the custom hook
// import TransitCard from './Landing'; // Assuming you reuse the TransitCard from LandingPage

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
import React from 'react';
import { useFavorites } from '../components/FavoriteService';
import TransitCard from './Landing';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div>
      <h2>Your Favorite Stations</h2>
      <div id="favorites-cards-container">
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((station, i) => (
            <TransitCard
              key={i}
              iconPath={`/assets/icons/mta-train-icons/${station.direction}.svg`} // Adjust icon path accordingly
              idx={i}
              cardColor="#FFD700" // Optional: Give favorite cards a distinct color
              stationName={station.stationName}
              direction={station.direction}
              accessibility={station.accessibility}
              isFavorite={true} // All cards in favorites are favorites
              toggleFavorite={() => toggleFavorite(station)} // Allow removing from favorites
            />
          ))
        )}
      </div>
    </div>
  );
}