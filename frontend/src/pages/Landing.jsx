import React, { useState, Suspense } from 'react';
import TransitHeader from '../components/Header/TransitHeader';
import LocationSearch from '../components/Map/LocationSearch';

const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));
const TransitRouteContainer = React.lazy(() => import('../components/TransitRoutes/TransitRouteContainer'));

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //default coordinates set to nyc

  const LoadingFallback = () => <div>Loading...</div>;


  const toggleFavorite = (index) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(index)) {
        newFavorites.removeFav(index); // Remove from favorites
      } else {
        newFavorites.addFav(index); // Add to favorites
      }
      return newFavorites;
    });
  };

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <TransitHeader />
        <MapContainerComponent setCoords={setCoords} />
        <LocationSearch setCoords={setCoords} />
        <TransitRouteContainer coords={coords} />
      </Suspense>
    </>
  );
}
