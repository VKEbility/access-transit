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
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites on component mount
  useEffect(() => {
    fetch('/favorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setFavorites(data.favorites); // Set the fetched favorites to state
      } else {
        console.error("Failed to load favorites:", data.message);
      }
    })
    .catch(error => {
      console.error('Error loading favorites:', error);
    });
  }, []); // Empty array ensures this runs only once when component mounts

  return (
    <>
      <h2 id="section-title">Favorites</h2>
      <div id="favorite-card-container">
        <div id="favorites-container">
          {favorites.length > 0 ? (
            favorites.map((favorite, index) => (
              <div key={index} id="favorite-card">
                <p>Train: {favorite.trainId}</p>
                <p>Station: {favorite.station}</p>
                {/* You can add additional info if needed */}
              </div>
            ))
          ) : (
            <p>No favorite stations added yet.</p>
          )}
        </div>
      </div>
    </>
  );
};