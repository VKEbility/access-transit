const { fetchHandler } = require('../../shared/fetchingUtils.cjs');

exports.fetchADAStations = async () => {
  // console.log('--ADA FETCH INVOKED @fetchADAStations'); //to help debug;
  const ADA_API_URL = 'https://data.ny.gov/resource/39hk-dx4f.json?ada=1'; //fetching only ADA stations by the 'ada=1' query param
  const [data, error] = await fetchHandler(ADA_API_URL);
  if (error) return [null, error];
  return [data, null];
};
