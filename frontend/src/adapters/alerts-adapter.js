import { fetchHandler } from '../../../shared/fetchingUtils.mjs';

const baseUrl = '/api/service-alerts';

export const fetchAllAlerts = async () => {
  const [data, err] = await fetchHandler(`${baseUrl}`);
  if (err) return [null, err.msg];
  return [data, null];
};

export const fetchRouteAlerts = async (rt_stop_id) => {
  const [data, err] = await fetchHandler(`${baseUrl}/${rt_stop_id}`);
  if (err) return [null, err.msg];
  return [data, null];
};
