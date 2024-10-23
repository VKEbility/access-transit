import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'transitFavorites';

// Custom hook to manage favorites
export const useFavorites = () => {
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    setFavorites(new Set(storedFavorites ? JSON.parse(storedFavorites) : []));
  }, []);

  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = new Set(prevFavorites);
      if (updatedFavorites.has(index)) {
        updatedFavorites.delete(index);
      } else {
        updatedFavorites.add(index);
      }
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...updatedFavorites]));
      return updatedFavorites;
    });
  };

  const isFavorite = (index) => {
    return favorites.has(index);
  };

  return { favorites, toggleFavorite, isFavorite };
};