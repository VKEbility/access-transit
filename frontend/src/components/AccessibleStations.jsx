import { useState, useEffect } from 'react';
// import {fetchHandler} from '../utils/fetchingUtils.js';

export default function AccessibleStations() {
  // to keep track of the state of train station when fetching 
  const [accessibleTrainStations, setTrainStations] = useState([]);
  // to keep track of the train station being added to the rendered object 
  const [accessibleObj, setAccessibleObj] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `https://data.ny.gov/resource/39hk-dx4f.json?ada=1`;
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        const newAccessibleObj = {};
        // Push data into accessibleObj
        data.forEach(trainStation => {
          newAccessibleObj[trainStation.complex_id] = [
            trainStation.ada, 
            trainStation.station_id, 
            trainStation.gtfs_stop_id, 
            trainStation.stop_name
          ];
        });

        // Update states
        setTrainStations(data);
        setAccessibleObj(newAccessibleObj);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    doFetch();
  }, []);

  // console.log("Accessible Object: ", accessibleObj); // This will show the entered data 

  return (
    <div>
      <h1>Accessible Stations</h1>
      <ul>
        {
          accessibleTrainStations.length > 0
            ? accessibleTrainStations.map((trainStation) => (
              <li key={trainStation.gtfs_stop_id}>
                <p>Station ID: {trainStation.station_id}</p>
                <p>Stop Name: {trainStation.stop_name}</p>
              </li>
            ))
            : <p>Train Stations Are Not Found</p>
        }
      </ul>
    </div>
  )

}

