import { fetchHandler } from "../utils/fetchingUtils";

const baseUrl = '/api/users/';

export const getHeroCount = async (user_id) => {
  const [heroCount, err] = await fetchHandler(`${baseUrl}/${user_id}/hero_count`);
  if (err) {
    console.log(err); // Print the error for simplicity
    return null;
  }
  return heroCount || 0; // Return 0 if no hero count is found
};