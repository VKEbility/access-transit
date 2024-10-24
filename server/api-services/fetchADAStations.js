const { fetchHandler } = require('../../shared/fetchingUtils.cjs');

exports.fetchADAStations = async () => {
  console.log('STARTING @fetchADAStations:');
  const ADA_API_URL = "https://data.ny.gov/resource/39hk-dx4f.json?ada=1"; //fetching ADA stations only with ada=1 query param

  const [data, error] = await fetchHandler(ADA_API_URL);
  if (error) return [null, error];
  return [data, null];
};
