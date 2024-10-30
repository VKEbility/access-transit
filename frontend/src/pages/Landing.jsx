import React, { useState, Suspense } from 'react';
import TransitHeader from '../components/Header/TransitHeader';
import LocationSearch from '../components/Map/LocationSearch';
import useNearbyRoutes from '../hooks/useNearbyRoutesLoader';
import FavoriteContainer from '../components/Favorites/FavoritesContainer';
import { Button } from '../components/ui/button';

const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));
const TransitRouteContainer = React.lazy(() => import('../components/TransitRoutes/TransitRouteContainer'));

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //default coordinates set to nyc
  const [mapReady, setMapReady] = useState(false);
  const [locationSearched, setLocationSearched] = useState(false);

  const { loadNearbyRoutes } = useNearbyRoutes(coords, mapReady, locationSearched); //enabling the hook call
  const LoadingFallback = () => <div>Loading...</div>;

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <TransitHeader />
        <MapContainerComponent coords={coords} setCoords={setCoords} setMapReady={setMapReady} />
        <LocationSearch setCoords={setCoords} setLocationSearched={setLocationSearched} />
        <FavoriteContainer></FavoriteContainer>
        <TransitRouteContainer coords={coords} mapReady={mapReady} />
      </Suspense>
    </>
  );
}

