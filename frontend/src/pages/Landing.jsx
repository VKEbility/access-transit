import React, { useState, Suspense } from 'react';
import TransitHeader from '../components/Header/TransitHeader';
import LocationSearch from '../components/Map/LocationSearch';
import useNearbyRoutes from '../hooks/useNearbyRoutesLoader';

const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));
const TransitRouteContainer = React.lazy(() => import('../components/TransitRoutes/TransitRouteContainer'));

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //default coordinates set to nyc
  const [mapReady, setMapReady] = useState(false);
  const [locationSearched, setLocationSearched] = useState(false);

  const { loadNearbyRoutes } = useNearbyRoutes(coords, mapReady, locationSearched); //enabling the hook call
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
        <MapContainerComponent coords={coords} setCoords={setCoords} setMapReady={setMapReady} />
        <LocationSearch setCoords={setCoords} setLocationSearched={setLocationSearched} />
        <TransitRouteContainer coords={coords} mapReady={mapReady} />
      </Suspense>
    </>
  );
}
