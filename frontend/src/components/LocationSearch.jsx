import { useState } from 'react';
import { getSearchLocation } from '../adapters/map-adapter';
import '../styles/map.css';

const LocationSearch = ({ setCoords }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const [queryCoords, error] = await getSearchLocation(query);
    if (error) return console.warn("No search results found for that location");
    console.log('coords for search query', queryCoords);
    if (queryCoords && queryCoords.length > 0) {
      const { lat, lon } = data[0];
      setCoords({ lat, lon });
      setQuery('');
    }
  };

  return (
    <form id="location-search-form" onSubmit={handleSearch}>
      <input
        type="text"
        id="location-search"
        name="locationSearch"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a location"
      />
      <button type="submit">Where to?</button>
    </form>
  );
};

export default LocationSearch;
