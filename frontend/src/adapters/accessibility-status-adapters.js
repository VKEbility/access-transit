import { fetchHandler, getPostOptions } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api/accessibility';

export const fetchAccessibilityTime = async () => {
  const [data, err] = await fetchHandler(`${baseUrl}`);
  if (err) return [null, err.msg];
  return [data, null];
};