import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api';

export const fetchSearchLocation = async ({ query }) => {
  console.log('START @fetchSearchLocation', getPostOptions({ query }));
  const [data, err] = await fetchHandler(`${baseUrl}/map-search`, getPostOptions({ query }));
  if (err) return [null, err.msg];
  return [data, null];
};