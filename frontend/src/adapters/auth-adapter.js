import { fetchHandler, getPostOptions, deleteOptions } from "../utils/fetchingUtils";

const baseUrl = '/api';

export const checkForLoggedInUser = async () => {
  const [data, err] = await fetchHandler(`${baseUrl}/me`); //throwback to mod3 async/await error handling
  if (err) return err.msg;
  return data;
};

export const logUserIn = async ({ emailOrUsername, password }) => {
  const [data, err] = await fetchHandler(`${baseUrl}/login`, getPostOptions({ emailOrUsername, password }));
  if (err) return [null, err.msg];
  return [data, null];
};

// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logUserOut = async () => {
  const [data, err] = await fetchHandler(`${baseUrl}/logout`, deleteOptions);
  if (err) return [null, err.msg];
  return [true, null];
};