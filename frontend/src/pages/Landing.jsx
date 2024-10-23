import React, { useEffect, useState, Suspense } from 'react';
const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //default coordinates set to nyc

  return (
    <>
      <header>
        <h1 id="site-title-logged-in">Welcome to #AccessTransit</h1>
      </header>
      <Suspense fallback={<div>Loading map...</div>}>
        <MapContainerComponent setCoords={setCoords} />
      </Suspense>
      <h2 id="section-title">Nearby Routes</h2>
    </>
  );
}
