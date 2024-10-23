import { useState, useEffect } from 'react';
import { fetchNearbyRoutes } from '../../adapters/transit-adapters';
import TransitRouteCard from '../TransitRoutes/TransitRouteCard';
import '../../styles/routes.css';

export default function NearbyRoutesContainer({ coords }) {
  const [routes, setRoutes] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true); //making sure routes don't refresh automatically in useEffect unless first page load
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const loadNearbyRoutes = async () => {
    setLoading(true), setErrorText('');
    console.log('BEFORE @loadNearbyRoutes():', coords.lat, coords.lon);
    if (!coords.lat || !coords.lon) return setErrorText('Missing coordinates'), setLoading(false);
    const [routesObj, error] = await fetchNearbyRoutes(coords);
    if (error) return setErrorText(error.msg), setLoading(false);
    if (routesObj) console.log('AFTER @loadNearbyRoutes():', routesObj); //to help debug

    setRoutes(routesObj || []), setLoading(false);
  };

  useEffect(() => { //happens automatically on first render
    if (firstLoad && coords.lat && coords.lon) {
      loadNearbyRoutes();
      setFirstLoad(false); //set first load flag to false after the first fetch
    }
  }, [firstLoad, coords]);

  return (
    <div>
      <button id="refresh-routes" onClick={loadNearbyRoutes}>Refresh</button>

      <div className="routes-container">
        <div className="nearby-routes-container">
          {errorText && <p className="error-text">{errorText}</p>}
          {loading && <p>Loading nearby routes...</p>}
          {routes.length > 0 ? (
            routes.map((route) => (
              <TransitRouteCard key={route.transitId} route={route} />
            ))
          ) : (
            <p>No nearby routes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
