import { fetchHandler } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api/ada';

export const getAllADAStations = async () => {
  const [data, err] = await fetchHandler(`${baseUrl}`);
  if (err) return [null, err.msg];
  return [data, null];
};