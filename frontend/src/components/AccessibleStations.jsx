import { useState, useEffect } from 'react';
// import {fetchHandler} from '../utils/fetchingUtils.js';

export default function AccessibleStations() {
  const [accessibleTrainStations, setTrainStations] = useState([]);
  const [accessibleArr, setAccessibleArr] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `https://data.ny.gov/resource/39hk-dx4f.json?ada=1`;
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        // Push data into accessibleArr
        const newAccessibleArr = [];
        data.forEach(trainStation => {
          newAccessibleArr.push(trainStation);
        });

        // Update state
        setTrainStations(data);
        setAccessibleArr(newAccessibleArr);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    doFetch();
  }, []);

  console.log("Accessible Array: ", accessibleArr); // This will show the pushed data 
}

