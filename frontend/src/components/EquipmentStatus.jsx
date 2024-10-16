import { useState, useEffect } from 'react';
// import {fetchHandler} from '../utils/fetchingUtils.js';

export default function EquipmentStatus() {
  const [equipmentStatuses, setEquipmentStatus] = useState([]);
  const [statusesObj, setStatusObj] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const API_URL = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fnyct_ene_equipments.json`;
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const accessibleEquipmentObj = {};
        // Push data into statusesObj
        data.forEach(equipment => {
          accessibleEquipmentObj[equipment.equipmentno] = [
            equipment.equipmenttype, 
            equipment.stationcomplexid, 
            equipment.isactive
          ];
        });

        // Update state
        setEquipmentStatus(data);
        setStatusObj(accessibleEquipmentObj);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    doFetch();
  }, []);

  console.log("Equipments and their statuses: ", statusesObj); // This will show the entered data 
}

