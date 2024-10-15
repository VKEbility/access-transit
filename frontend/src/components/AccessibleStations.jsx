import { useState, useEffect } from 'react';
import {fetchHandler} from '../utils/fetchingUtils.js';

export default function AccessibleStations() {
  const [accessibleTrainStations, setTrainStations] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `https://data.ny.gov/resource/39hk-dx4f.json?ada=1`;
      try {
        const [data, error] = await fetchHandler(API_URL);
        if (data) setTrainStations(data);
        console.log("HELLLOOOOOO");
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    doFetch();
  }, [])

  return (
    <div>
      <h1>Accessible Stations</h1>
      <ul>
        {
          accessibleTrainStations.length > 0
            ? accessibleTrainStations.map((trainStation) => (
              <li key={trainStation.complex_id}>
                <p>Station ID: {trainStation.station_id}</p>
                <p>Stop Name: {trainStation.stop_name}</p>
              </li>
            ))
            : <p>Train Stations Are Not Found</p>
        }
      </ul>
    </div>
  );
}

