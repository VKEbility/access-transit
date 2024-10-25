import { useState, useEffect } from 'react';
import NearbyRoutesCard from './NearbyRoutesCard';
import { getNearbyRoutes } from '../adapters/transit-adapter';

export default function NearbyRoutesContainer({ coords }) {
  const [routes, setRoutes] = useState([]);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const loadNearbyRoutes = async () => {
    setLoading(true), setErrorText('');
    console.log('BEFORE @loadNearbyRoutes():', coords.lat, coords.lon);
    if (!coords.lat || !coords.lon) return setErrorText('Invalid coordinates'), setLoading(false);
    // const [routesObj, error] = await getNearbyRoutes(coords);
    if (routesObj) console.log('AFTER @loadNearbyRoutes():', routesObj);
    if (error) return setErrorText(error.msg), setLoading(false);

    setRoutes(routesObj || []), setLoading(false);
  };

  useEffect(() => {
    loadNearbyRoutes();
  }, [coords]);

  return (
    <div>
      {errorText && <p className="error-text">{errorText}</p>}
      {loading && <p>Loading nearby routes...</p>}

      <button id="refresh-routes" onClick={loadNearbyRoutes}>Refresh Nearby Routes</button>
      <div className="routes-list">
        {Array.isArray(routes) && routes.length > 0
          ? (routes.map((route) => <NearbyRoutesCard key={route.realTimeRouteId} route={route} />))
          : (<p>No nearby routes found.</p>)}
      </div>

    </div>
  );
}
