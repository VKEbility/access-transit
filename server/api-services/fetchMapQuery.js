const { fetchHandler, basicFetchOptions } = require('../../shared/fetchingUtils.cjs');

const cache = {};

exports.fetchSearchCoords = async (query) => {
  console.log('--SEARCH QUERY FETCH INVOKED @fetchSearchCoords', query); //to help debug;
  if (cache[query]) return [cache[query], null]; //returning cached data if available

  const GEOLOCATION_API_URL = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&bounded=1&viewbox=-74.2591,40.4774,-73.7004,40.9176`; //bound box endpoint limiting results to nyc + parts of nj
  const headers = { //headers required for compliance with Nominatim terms
    "User-Agent": "AccessTDev/1.0",
    "Referer": "https://access-transit.onrender.com"
  };
  const [data, error] = await fetchHandler(GEOLOCATION_API_URL, basicFetchOptions(headers));
  if (error) return [null, error];

  const locations = Array.isArray(data) ? data //making sure data is an arr before accessing, in case query yielded no search results
    .filter(item => item && typeof item.lat !== 'undefined' && typeof item.lon !== 'undefined') // filtering out invalid items to avoid passing undefined values to client
    .map(item => {
      return {
        placeId: item.place_id ?? null, //unique identifier for the place in the Nominatim db
        license: item.license ?? null, //ex. 'Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright'
        osmType: item.osm_type ?? null, //type of OpenStreetMap el (node, way), used for understanding the data structure
        osmId: item.osm_id ?? null, //unique id for OSM el
        lat: parseFloat(item.lat), //converting to decimal ints so frontend can use it as coords
        lon: parseFloat(item.lon),
        class: item.class ?? null, //place class for categorization- ex. building, highway, railway
        type: item.type ?? null, //type of place- ex. station, residential, apartments, house
        placeRank: item.place_rank ?? null, //place rank based on relevancy/popularity
        importance: item.importance ?? null, //used for ranking search results, similar to place rank
        addressType: item.addresstype ?? null, //ex. road
        name: item.name ?? null, //short name for location- ex. '34th St.'
        displayName: item.display_name ?? null, //long name for location- ex. 'East 34th Street, Manhattan Community Board 6, Manhattan, New York County, City of New York, New York, 10016, United States'
        boundingBox: item.boundingbox?.map(coord => parseFloat(coord) ?? null), //arr representing the bounding box or border limits to visualize the area a location covers 
      }
    }) : null;

  cache[query] = locations;
  return [locations, null];
};
