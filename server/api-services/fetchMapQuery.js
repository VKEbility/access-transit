const { fetchHandler, basicFetchOptions } = require('../../shared/fetchingUtils.cjs');

const cache = {};

exports.fetchSearchCoords = async (query) => {
  console.log('--SEARCH QUERY FETCH INVOKED @fetchSearchCoords', query); //to help debug;
  if (cache[query]) return [cache[query], null]; //returning cached data if available

  const GEOLOCATION_API_URL = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;
  const headers = { //headers required for compliance with nominatim terms
    "User-Agent": "AccessTDev/1.0",
    "Referer": "https://access-transit.onrender.com"
  };
  const [data, error] = await fetchHandler(GEOLOCATION_API_URL, basicFetchOptions(headers));
  if (error) return [null, error];

  cache[query] = data
  return [data, null];
};
