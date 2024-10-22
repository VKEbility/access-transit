// import { useState, useEffect } from 'react';

// const FAVORITES_KEY = 'transitFavorites';

// // Custom hook to manage favorites
// export const useFavorites = () => {
//   const [favorites, setFavorites] = useState(new Set());

//   useEffect(() => {
//     const storedFavorites = localStorage.getItem(FAVORITES_KEY);
//     setFavorites(new Set(storedFavorites ? JSON.parse(storedFavorites) : []));
//   }, []);

//   const toggleFavorite = (index) => {
//     setFavorites((prevFavorites) => {
//       const updatedFavorites = new Set(prevFavorites);
//       if (updatedFavorites.has(index)) {
//         updatedFavorites.delete(index);
//       } else {
//         updatedFavorites.add(index);
//       }
//       localStorage.setItem(FAVORITES_KEY, JSON.stringify([...updatedFavorites]));
//       return updatedFavorites;
//     });
//   };

//   const isFavorite = (index) => {
//     return favorites.has(index);
//   };

//   return { favorites, toggleFavorite, isFavorite };
// };
import { useState, useEffect } from 'react';

// Custom hook for managing favorites
export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    // Retrieve stored favorites from localStorage or initialize to empty array
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toggleFavorite = (cardData) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.stationName === cardData.stationName);
      if (isAlreadyFavorite) {
        // Remove from favorites if it already exists
        const updatedFavorites = prevFavorites.filter(fav => fav.stationName !== cardData.stationName);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Persist to localStorage
        return updatedFavorites;
      } else {
        // Add new favorite
        const updatedFavorites = [...prevFavorites, cardData];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Persist to localStorage
        return updatedFavorites;
      }
    });
  };

  const isFavorite = (stationName) => {
    return favorites.some(fav => fav.stationName === stationName);
  };

  return { favorites, toggleFavorite, isFavorite };
}