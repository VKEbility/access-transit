import React, { useState, Suspense, useEffect } from 'react';
import TransitHeader from '../components/Header/TransitHeader';
import LocationSearch from '../components/Map/LocationSearch';
import useNearbyRoutes from '../hooks/useNearbyRoutesLoader';
// import FavoriteContainer from '../components/Favorites/FavoritesContainer';

const MapContainerComponent = React.lazy(() => import('../components/Map/Map'));
const TransitRouteContainer = React.lazy(() =>
  import('../components/TransitRoutes/TransitRouteContainer')
);

export default function LandingPage() {
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.006 }); //default coordinates set to nyc
  const [mapReady, setMapReady] = useState(false);
  const [locationSearched, setLocationSearched] = useState(false);

  const { loadNearbyRoutes } = useNearbyRoutes(
    coords,
    mapReady,
    locationSearched
  );
  const LoadingFallback = () => <div>Loading...</div>;

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    //init the google translator
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,ja,zh,pt,ru,ar,hi,ko',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        {/* Add the translator container */}
        <TransitHeader />
        <MapContainerComponent
          coords={coords}
          setCoords={setCoords}
          setMapReady={setMapReady}
        />
        <LocationSearch
          setCoords={setCoords}
          setLocationSearched={setLocationSearched}
        />
        {/* <FavoriteContainer></FavoriteContainer> */}
        <TransitRouteContainer coords={coords} mapReady={mapReady} />
        <div id="google_translate_element"></div>{' '}
      </Suspense>
    </>
  );
}
