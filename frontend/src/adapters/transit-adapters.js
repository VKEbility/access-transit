import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api/transit-routes';

export const fetchNearbyRoutes = async (coords) => {
  const [data, err] = await fetchHandler(`${baseUrl}`, getPostOptions(coords)); //sending coords in req body
  if (err) return [null, err.msg];
  return [data, null];
};