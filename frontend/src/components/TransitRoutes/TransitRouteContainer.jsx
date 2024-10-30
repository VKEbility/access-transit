import TransitRouteCard from '../TransitRoutes/TransitRouteCard';
import useNearbyRoutes from '../../hooks/useNearbyRoutesLoader';
import '../../styles/routes.css';

export default function NearbyRoutesContainer({ coords, mapReady }) {
  const { routes, setRoutes, errorText, loading, loadNearbyRoutes } = useNearbyRoutes(coords, mapReady);

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
              <TransitRouteCard key={route.transitId} route={route} onTimerEnd={() => handleTimerEnd(route.transitId)} />
            ))
          ) : (
            <p>No nearby routes found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
