// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password, email, language }) => {
  return fetchHandler(baseUrl, getPostOptions({ username, password, email, language }))
};

// For this one adapter, if an error occurs, we handle it here by printing
// the error and return an empty array
export const getAllUsers = async () => {
  const [users, err] = await fetchHandler(baseUrl);
  if (err) console.log(err); // print the error for simplicity
  return users || [];
};

export const getUser = async (id) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`);
  if (err) return [null, err.msg];
  return [data, null];
}

export const updateUser = async ({ id, username = null, password = null, email = null }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username, password, email }));
  if (err) return [null, err.msg];
  return [data, null];
}

