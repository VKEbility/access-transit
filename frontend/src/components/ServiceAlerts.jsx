import { useState, useEffect } from 'react';
import { fetchAllAlerts, fetchRouteAlerts } from '../adapters/alerts-adapter';
import AccessibilityStatusTime from './TransitRoutes/AccessibilityStatusTime';

export default function ServiceAlerts({ rt_stop_id }) {
  const [allAlerts, setAllAlerts] = useState([]);
  const [postedTime, setPostedTime] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlerts = async () => {
      setLoading(true), setErrorText('');
      console.log('BEFORE @loadAlerts():', rt_stop_id || 'ALL alerts');
      const fetchAdapter = rt_stop_id ? () => fetchRouteAlerts(rt_stop_id) : fetchAllAlerts;
      const [alertsObj, error] = await fetchAdapter();
      if (error) return setErrorText(error.msg);
      if (alertsObj) console.log('AFTER @loadAlerts():', alertsObj); //to help debug

      setPostedTime(alertsObj.postedTimestamp)
      setAllAlerts(alertsObj.alerts), setLoading(false);
    };

    loadAlerts();
  }, [rt_stop_id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Service Alerts</h1>
      <p>All alerts in effect</p>
      {errorText && <p>Error: {errorText}</p>}
      {loading && <p>Loading...</p>}

      <ul>
        <li>
          <AccessibilityStatusTime />
        </li>
        {/* {allAlerts.length > 0 ? (
          allAlerts.map(alert => (
            <li key={alert.id}>
              <p>Route: {alert.informedEntities?.metaData?.rtLineId || 'N/A'}</p>
              <p>Alert Type: {alert.alertType || 'N/A'}</p>
              <p>Header: {alert.headerText || 'N/A'}</p>
              <p>Description: {alert.descriptionText || 'N/A'}</p>
              <p>Active Period: {alert.activePeriod ? alert.activePeriod.map(period =>
                `${period.starting} to ${period.ending}`).join(', ') : 'N/A'}</p>
              <p>Alternatives: {alert.travelAlternatives?.map(alt => `${alt.stopId} - ${alt.notes}`) || 'N/A'}</p>
              <p>Posted: {postedTime || 'N/A'}</p>
              <p>Agency: {alert.informedEntities?.metaData?.agencyId || 'N/A'}</p>
            </li>
          ))
        ) : (
          <p>No subway alerts found. Please try again later.</p>
        )} */}
      </ul>
    </div>
  );
};
