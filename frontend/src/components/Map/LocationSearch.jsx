import { useState } from 'react';
import { fetchSearchLocation } from '../../adapters/map-adapters';
import sanitizeInput from '../../utils/validation';
import { Button, TextInput, Flex, Loader } from '@mantine/core';
// import '../../styles/map.css';

export default function LocationSearch({ setCoords, setLocationSearched }) {
  const [query, setQuery] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const sanitizedQuery = sanitizeInput(query); //escaping + sanitizing to prevent xss attacks
  const formattedQuery = encodeURIComponent(sanitizedQuery.trim());
  console.log('Search query at @LocationSearch.jsx:', formattedQuery);  //to help debug

  const loadQueryCoords = async (e) => {
    setLoading(true), setErrorText('');
    e.preventDefault();
    console.log('BEFORE @loadQueryCoords():', formattedQuery); //to help debug
    if (!query) return setErrorText('Please type in a location'), setLoading(false);
    const [locations, error] = await fetchSearchLocation({ query: formattedQuery });
    if (error) return setErrorText(error.msg), setLoading(false);
    console.log('AFTER @loadQueryCoords():', locations[0].lat, locations[0].lon, locations); //to help debug

    if (locations && locations.length > 0) {
      const { lat, lon } = locations[0]; //getting coords for first search result (cons: won't be as accurate as user choosing from autocomplete options)
      setCoords({ lat, lon }); //updating coords state
      setLocationSearched(true); //invoking the useEffect in useNearbyRoutes hook
      setQuery(''); //clear input field
      setLoading(false);
    }
    setLocationSearched(false); //resetting state at the end
  };

  return (
    <div>
      {errorText && <p className="error-text">{errorText}</p>}
      {loading ? <Loader /> : (
        <Flex direction="column" align="center" justify="center" gap="md">
          <form id="location-search-form" onSubmit={loadQueryCoords}>
            <input
              type="text"
              id="location-search-input"
              name="locationSearch"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a location"
              style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}
            />
            <Button id="location-search-button" type="submit" style={{ width: '100%', maxWidth: '300px' }}>Where to?</Button>
          </form>
        </Flex>
      )}
    </div>
  );
};
