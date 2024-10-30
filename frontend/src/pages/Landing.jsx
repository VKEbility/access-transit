import React, { useState, Suspense } from 'react';
import TransitHeader from '../components/Header/TransitHeader';
const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));
const TransitRouteContainer = React.lazy(() => import('../components/TransitRoutes/TransitRouteContainer'));
const FavoritesContainer = React.lazy(() => import('../components/Favorites/FavoritesContainer'));

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //default coordinates set to nyc

  const LoadingFallback = () => <div>Loading...</div>;

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <TransitHeader />
        <MapContainerComponent setCoords={setCoords} />
        <FavoritesContainer /> 
        <TransitRouteContainer coords={coords} setCoords={setCoords} />
      </Suspense>
    </>
  );
}

