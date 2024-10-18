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

        // data.forEach(subwayAlert => {
        //   newSubwayAlertObj[subwayAlert.entity[i].id] = [
        //     'hello'
        //     // subwayAlert.entity.alert.active_period.start  
        //     // subwayAlert.station_id, 
        //     // subwayAlert.gtfs_stop_id, 
        //     // subwayAlert.stop_name
        //   ];
        // });

        // for (let i = 0; i < data.length; i++) {
        //   newSubwayAlertObj[data.entity[i].id] = [
        //     entity[i].alert.header_text.translation[0].text
        //   ];
        // }

        data.entity.forEach((alert) => {
          newSubwayAlertObj[alert.id] = alert.alert.header_text.translation[0].text;
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

  // console.log("Subway Alerts Object: ", newSubwayAlertObj); // This will show the rendered data 

  // let idIdx = -1;

  return (
    <div>
      <ul>
        {
          Object.entries(subwayAlertsObj).length > 0
            ? Object.entries(subwayAlertsObj).map(([id, headerText]) => (
                <li key={id}>
                  <p>ID: {id}</p>
                  <p>Header Text: {headerText}</p>
                </li>
              ))
            : <p>Subway Alerts Are Not Found</p>
        }
      </ul>
    </div>
  )

}

