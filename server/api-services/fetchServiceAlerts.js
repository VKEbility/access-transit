const { fetchHandler } = require('../../shared/fetchingUtils.cjs');
const { agencyName, unixConverter } = require('../utils/formatter-utils');

exports.fetchServiceAlerts = async (rt_stop_id) => {
  // console.log('--ALERTS FETCH INVOKED @fetchServiceAlerts'); //to help debug;
  const MTA_API_URL = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fall-alerts.json';
  const [data, error] = await fetchHandler(MTA_API_URL);
  if (error) return [null, error];

  const postedTimestamp = unixConverter(data.header.timestamp); //time entire alert dataset was updated, converted to readable timestamp
  const allAlerts = data.entity.map(alertEntity => {
    const alert = alertEntity.alert;
    const alertId = alertEntity.id;
    const headerText = alert.header_text?.translation?.find(t => t.language === 'en')?.text ?? null;
    const descriptionText = alert.description_text?.translation?.find(t => t.language === 'en')?.text ?? null;

    const activePeriod = alert.active_period?.map(unix => ({ //time span alert will be in effect
      starting: unixConverter(unix.start),
      ending: unixConverter(unix.end) ?? 'Ongoing'
    }));

    const mercuryAlert = alert['transit_realtime.mercury_alert'];
    const alertType = mercuryAlert?.alert_type ?? null;
    const renderTime = mercuryAlert?.display_before_active ?? null;
    const travelAlternatives = mercuryAlert?.station_alternative?.map(alt => {
      const affectedEntity = alt.affected_entity;
      const notes = alt.notes?.translation?.find(t => t.language === 'en')?.text ?? null;

      return {
        agencyId: agencyName(affectedEntity.agency_id),
        stopId: affectedEntity.stop_id,
        notes
      };
    }) || [];

    const informedEntities = alert.informed_entity?.reduce((accObj, entity, idx) => {
      if (idx === 0) {
        accObj.metaData = {
          agencyId: agencyName(entity.agency_id),
          rtLineId: entity.route_id ?? null, //entire affected line
          sortOrder: entity['transit_realtime.mercury_entity_selector']?.sort_order?.split(':').slice(2).join('') || null
        };
      } else if (entity.stop_id) {
        accObj.affectedStops.push({
          alertId: alertId ?? null,
          rtStopId: entity.stop_id ?? null
        });
      }
      return accObj;
    }, { metaData: null, affectedStops: [] });

    return {
      id: alertId,
      headerText,
      descriptionText,
      activePeriod,
      alertType,
      renderTime,
      informedEntities, //arr of objs including metadata and nested arr of affected stops
      travelAlternatives
    };
  });

  const routeAlerts = allAlerts.filter(alert =>
    alert.informedEntities?.affectedStops?.some(stop => stop.rtStopId === rt_stop_id)
  );

  const serviceAlerts = {
    postedTimestamp,
    alerts: rt_stop_id ? routeAlerts : allAlerts
  };

  return [serviceAlerts, null];
};
