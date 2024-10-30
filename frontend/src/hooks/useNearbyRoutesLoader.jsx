import { useState, useEffect, useCallback } from 'react';
import { fetchNearbyRoutes } from '../adapters/transit-adapters';

export default function useNearbyRoutes(coords, mapReady, locationSearched) {
  const [routes, setRoutes] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true); //making sure routes don't refresh automatically in useEffect unless first page load
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const loadNearbyRoutes = useCallback(async () => {
    setLoading(true), setErrorText('');
    console.log('BEFORE @loadNearbyRoutes():', coords.lat, coords.lon);
    if (!coords.lat || !coords.lon) return setErrorText('Missing coordinates'), setLoading(false);
    const [routesObj, error] = await fetchNearbyRoutes(coords);
    if (error) return setErrorText(error.msg), setLoading(false);
    if (routesObj) console.log('AFTER @loadNearbyRoutes():', routesObj); //to help debug

    setRoutes(routesObj || []), setLoading(false);
  }, [coords]);

  useEffect(() => { //happens automatically on first render
    if (firstLoad && mapReady && coords.lat && coords.lon) {
      loadNearbyRoutes();
      setFirstLoad(false); //set first load flag to false after the first fetch
    }
  }, [firstLoad, mapReady, coords, loadNearbyRoutes]);

  useEffect(() => { //happens automatically on first render
    if (locationSearched && mapReady && coords.lat && coords.lon) {
      loadNearbyRoutes();
    }
  }, [locationSearched, mapReady, coords, loadNearbyRoutes]);

  return {
    routes,
    setRoutes,
    errorText,
    loading,
    loadNearbyRoutes,
  };
};
