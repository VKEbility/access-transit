const { fetchHandler } = require('../../shared/fetchingUtils.cjs');

exports.fetchMapLocation = async (query) => {
  console.log('STARTING @fetchADAStations:');
  const MAP_API_URL = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;

  const [data, error] = await fetchHandler(MAP_API_URL);
  if (error) return [null, error];
  return [data, null];
};
