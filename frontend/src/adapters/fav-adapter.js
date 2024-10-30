import { fetchHandler, getPostOptions, deleteOptions } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api/users';

export const addFav = async ({ userId, rt_stop_id, stop_name, gtfs_lat, gtfs_lon }) => {
  const [addedFav, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`, getPostOptions({ userId, rt_stop_id, stop_name, gtfs_lat, gtfs_lon }));
  if (err) return [null, err.msg];
  return [addedFav, null];
};

export const listFavs = async (user_id) => {
  const [favs, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`);
  if (err) console.log(err); // print the error for simplicity
  return favs || [];
};

export const removeFav = async ({ user_id, rt_stop_id }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, deleteOptions({ user_id, rt_stop_id }));
  if (err) return [null, err.msg];
  return [data, null];
}
