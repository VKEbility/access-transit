import { fetchHandler, getPostOptions, deleteOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/users';

// export const listFavs = async (user_id) => {
//   const favorites = await knex('favorites').where({ user_id: id });
//   return favorites;
// };

export const listFavs = async (user_id) => {
  // if favs is empty 
  const [favs, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`);
  if (err) console.log(err); // print the error for simplicity
  return favs || [];
};

export const addFav = async ({ user_id, rt_stop_id=1, stop_name="hello", gtfs_lon=12.34567, gtfs_lat=12.34567, equipmentNo}) => {
  const [addedFav, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`, getPostOptions({ user_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat, equipmentNo }));
  if (err) return [null, err.msg];
  return [addedFav, null];
};

export const removeFav = async ({ user_id, rt_stop_id }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, deleteOptions({ user_id, rt_stop_id }));
  if (err) return [null, err.msg];
  return [data, null];
}

