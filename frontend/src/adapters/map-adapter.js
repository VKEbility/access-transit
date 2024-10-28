import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api';

export const getSearchLocation = async (query) => {
  const [data, err] = await fetchHandler(`${baseUrl}/map-search`, getPostOptions(query));
  if (err) return [null, err.msg];
  return [data, null];
};