const { fetchHandler } = require('../../shared/fetchingUtils.cjs');

exports.fetchADAStations = async () => {
  // ada = 1 => only retrieve accessible stations
  const ADA_API_URL = "https://data.ny.gov/resource/39hk-dx4f.json?ada=1";
  const [data, error] = await fetchHandler(ADA_API_URL);
  if (error) return [null, error];
  return [data, null];
};
