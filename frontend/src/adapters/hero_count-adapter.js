import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api/hero_actions';

export const getHeroUsername = async () => {
  const [heroCount, err] = await fetchHandler(`${baseUrl}`);
  if (err) {
    console.log(err); // Print the error for simplicity
    return null;
  }
  return heroCount || 0; // Return 0 if no hero count is found
};

export const listAllHeroes = async () => {
  const [heroes, err] = await fetchHandler(`${baseUrl}`);
  if (err) {
    console.log(err);
    return [];
  }
  return heroes || [];
};
