import { useState, useEffect } from 'react';
// import {fetchHandler} from '../utils/fetchingUtils.js';

export default function EquipmentStatus() {
  const [equipmentStatuses, setEquipmentStatus] = useState([]);
  const [statusesArr, setStatusArr] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fnyct_ene_equipments.json`;
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Push data into accessibleArr
        const accessibleEquipmentArr = [];
        data.forEach(equipment => {
          accessibleEquipmentArr.push(equipment);
        });

        // Update state
        setEquipmentStatus(data);
        setStatusArr(accessibleEquipmentArr);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    doFetch();
  }, []);

  console.log("Equipments and their statuses: ", statusesArr); // This will show the pushed data 
}

