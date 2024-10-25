import { useState } from 'react';
import { fetchSearchLocation } from '../../adapters/map-adapters';
import '../../styles/map.css';

export default function LocationSearch({ setCoords, setLocationSearched }) {
  const [query, setQuery] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const formattedQuery = encodeURIComponent(query.trim());
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
      setLocationSearched(true);
      setQuery(''); //clear input field
      setLoading(false);
    }
    setLocationSearched(false);
  };

  return (
    <div>
      {errorText && <p className="error-text">{errorText}</p>}
      {loading && <p>Loading...</p>}
      <form id="location-search-form" onSubmit={loadQueryCoords}>
        <input
          type="text"
          id="location-search-input"
          name="locationSearch"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a location"
        />
        <button id="location-search-button" type="submit">Where to?</button>
      </form>
    </div>
  );
};
