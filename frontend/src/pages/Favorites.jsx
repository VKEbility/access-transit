import React from 'react';
import { useFavorites } from '../components/FavoriteService'; // Use the custom hook
import TransitCard from './Landing'; // Assuming you reuse the TransitCard from LandingPage

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites(); // Get the favorites and toggleFavorite from the hook
  const trainData = []; // You should replace this with your actual train data source
  const loadedTrainIcons = []; // Replace this with the actual loaded icons

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
              stationName={trainData[favIdx]?.stationName || 'N/A'}
              direction={trainData[favIdx]?.direction || 'Unknown'}
              accessibility={trainData[favIdx]?.accessibility || {}}
              isFavorite={true} // Always show filled star since it's in favorites
              toggleFavorite={() => toggleFavorite(favIdx)} // Remove from favorites if clicked
            />
          ))
        )}
      </div>
    </div>
  );
}