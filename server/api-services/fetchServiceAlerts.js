const { fetchHandler } = require('../../shared/fetchingUtils.cjs');

exports.fetchAlerts = async (rt_stop_id) => {
  console.log('starting accessibility status fetch')

  const MTA_API_URL = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fsubway-alerts.json`;
  const [data, error] = await fetchHandler(MTA_API_URL);
  if (error) return [null, error];

  const alerts = data.filter
    ((subwayAlert) => {
      const headerText = subwayAlert.alert.header_text?.translation?.[0]?.text || 'No Header Text';
      const descriptionText = subwayAlert.alert.description_text?.translation?.[0]?.text || 'No Description Text';
      const alertType = subwayAlert.transit_realtime?.mercury_alert?.alert_type || 'No Alert Type';
      const createdAt = subwayAlert.transit_realtime?.mercury_alert?.created_at || 'No Created-At';
      const updatedAt = subwayAlert.transit_realtime?.mercury_alert?.updated_at || 'No Updated-At';
      const textActivePeriod = subwayAlert.transit_realtime?.mercury_alert?.human_readable_active_period?.translation?.[0]?.text || 'No Text Active Period';
      const unixStartTime = subwayAlert.alert.active_period?.start || 'No Unix Start Time';
      const unixEndTime = subwayAlert.alert.active_period?.end || 'No Unix End Time';
      const agencyEntity = subwayAlert.informed_entity?.[0]?.agency_id || 'No Agency ID';
      const stopIdEntity = subwayAlert.informed_entity?.[1]?.stop_id || 'No Stop ID';
      const routeIdEntity = subwayAlert.informed_entity?.[0]?.route_id || 'No Route ID';
      const sortOrderEntity = subwayAlert.informed_entity?.[0]?.transit_realtime?.mercury_entity_selector?.sort_order || 'No Sort Order';


      newSubwayAlertObj[subwayAlert.id] = [headerText, descriptionText, alertType, createdAt, updatedAt, textActivePeriod, unixStartTime, unixEndTime,
        agencyEntity, stopIdEntity, routeIdEntity, sortOrderEntity];
    });

  return [routeStatus, null];
};