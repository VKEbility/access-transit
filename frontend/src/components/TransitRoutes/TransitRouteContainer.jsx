import { useState, useEffect } from 'react';
import { getNearbyRoutes } from '../../adapters/transit-adapter';
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
    const [routesObj, error] = await getNearbyRoutes(coords);
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

  const handleTimerEnd = (transitId) => { //when time reaches transit departure time, removing the route card from the container by its transitId
    setRoutes((prevRoutes) => prevRoutes.filter(route => route.transitId !== transitId)); //changing routes state by filtering the arr for only the routes that don't match the transitId
  };

  return (
    <div>
      <button id="refresh-routes" onClick={loadNearbyRoutes}>Refresh</button>

      <div className="routes-container">
        <div className="nearby-routes-container">
          {errorText && <p className="error-text">{errorText}</p>}
          {loading && <p>Loading nearby routes...</p>}
          {routes.length > 0 ? (
            routes.map((route) => (
              <li key={route.realTimeRouteId}>
                <TransitRouteCard key={route.transitId} route={route} onTimerEnd={() => handleTimerEnd(route.transitId)} />
              </li>
            ))
          ) : (
            <p>No nearby routes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}