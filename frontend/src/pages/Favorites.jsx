import React from 'react';
import { useFavorites } from '../hooks/FavoriteService'; // Use the custom hook
import TransitRouteCard from '../components/TransitRoutes/TransitRouteCard'; // Assuming you reuse the TransitCard from LandingPage

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


      </div>
    </div>
  );
}
