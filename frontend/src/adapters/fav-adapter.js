import { fetchHandler, getPostOptions, getPatchOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/users';

export const listFavs = async (user_id) => {
  const [favs, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`);
  if (err) console.log(err); // print the error for simplicity
  return favs || [];
};

export const addFav = async ({ user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat }) => {
  return fetchHandler(`${baseUrl}/${user_id}/favorites`, getPostOptions({ user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat }));
};

export const removeFav = async ({ user_id, gtfs_complex_id }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ user_id, gtfs_complex_id }));
  if (err) return [null, err.msg];
  return [data, null];
}

