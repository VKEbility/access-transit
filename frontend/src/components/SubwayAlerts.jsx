import { useState, useEffect } from 'react';
// import {fetchHandler} from '../utils/fetchingUtils.js';

export default function SubwayAlerts() {
  // to keep track of the state of subway alert when fetching 
  const [subwayAlerts, setSubwayAlerts] = useState([]);
  // to keep track of the subway alert being added to the rendered object 
  const [subwayAlertsObj, setSubwayAlertsObj] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fsubway-alerts.json`;
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const newSubwayAlertObj = {};
        
        // Push data into newSubwayAlertObj 
        data.entity.forEach((subwayAlert) => {
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

        // Update states
        setSubwayAlerts(data);
        setSubwayAlertsObj(newSubwayAlertObj);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    doFetch();
  }, []);

  return (
    <div>
      <ul>
        {
          Object.entries(subwayAlertsObj).length > 0 ? 
          
          Object.entries(subwayAlertsObj).map(([id, specifics]) => {
            // destructure 
            const [headerText, descriptionText, alertType, createdAt] = specifics;
            return (
              <li key={id}>
                <p>ID: {id}</p>
                <p>Header Text: {headerText}</p>
                <p>Description Text: {descriptionText}</p>
                <p>Alert Type: {alertType}</p>
                <p>Created At: {createdAt}</p> 
              </li>
            );
          })
          
          : <p>Subway Alerts Are Not Found</p>
        }
      </ul>
    </div>
  )
}

