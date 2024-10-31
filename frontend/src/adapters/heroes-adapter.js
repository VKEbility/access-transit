import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs.js';

const baseUrl = '/api/users/';

export const getHeroCount = async (id) => {
  const [heroCount, err] = await fetchHandler(`${baseUrl}/${id}/hero_count`);
  if (err) {
    console.log(err); // Print the error for simplicity
    return null;
  }
  return heroCount || 0; // Return 0 if no hero count is found
};

export const updateHeroCount = async ({ id, hero_count }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, getPostOptions({ id, hero_count }));
  if (err) return [null, err.msg];
  return [data, null];
}