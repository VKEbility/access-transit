import { fetchHandler, getPostOptions, getPatchOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/users';

export const listFavs = async (user_id) => {
  const [favs, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`);
  if (err) console.log(err); // print the error for simplicity
  return favs || [];
};

// export const addFav = async ({ user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat }) => {
//   return fetchHandler(`${baseUrl}/${user_id}/favorites`, getPostOptions({ user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat }));
// };

export const removeFav = async ({ user_id, gtfs_complex_id }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ user_id, gtfs_complex_id }));
  if (err) return [null, err.msg];
  return [data, null];
}

// export const addFav = async ({ user_id.. blahblah}) => {
//   if (!user_id || !blahbkah || !blah) console.log('NO stuff at addFavs');
//   const [favs, err] = await fetchHandler(`${baseUrl}`, getPostOptions(blahblah)); //sending params in req body to the controller- destructure it from the req.body in controller
//   if (err) return [null, err.msg];
//   return [favs, null];
// };

export const addFav = async ({ user_id, gtfs_complex_id, rt_stop_id, stop_name, gtfs_lon, gtfs_lat }) => {
  // Check if all required parameters are provided
  if (!user_id || !gtfs_complex_id || !rt_stop_id || !stop_name || !gtfs_lon || !gtfs_lat) {
    console.log('Missing parameters in addFav function');
    return [null, 'Missing parameters'];
  }

  // Prepare request payload
  const requestBody = {
    user_id,
    gtfs_complex_id,
    rt_stop_id,
    stop_name,
    gtfs_lon,
    gtfs_lat
  };

  // Send POST request to backend
  const [favs, err] = await fetchHandler(`${baseUrl}/${user_id}/favorites`, getPostOptions(requestBody));

  // Handle error if present
  if (err) {
    console.log('Error adding favorite:', err.msg);
    return [null, err.msg];
  }

  return [favs, null];
};
