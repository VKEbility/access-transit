import React, { useState, Suspense } from 'react';
import TransitHeader from '../components/Header/TransitHeader';
import LocationSearch from '../components/Map/LocationSearch';

const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));
const TransitRouteContainer = React.lazy(() => import('../components/TransitRoutes/TransitRouteContainer'));

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //default coordinates set to nyc
  const [mapReady, setMapReady] = useState(false);

  const LoadingFallback = () => <div>Loading...</div>;

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <TransitHeader />
        <MapContainerComponent coords={coords} setCoords={setCoords} setMapReady={setMapReady} />
        <LocationSearch setCoords={setCoords} />
        <TransitRouteContainer coords={coords} mapReady={mapReady} />
      </Suspense>
    </>
  );
}
