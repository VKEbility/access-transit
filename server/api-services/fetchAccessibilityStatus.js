const { fetchHandler } = require('../../shared/fetchingUtils.cjs');
const { unixConverter } = require('../utils/formatter-utils');

exports.fetchAccessibilityStatus = async (rt_stop_id) => {
  console.log('ACCESSIBILITY STATUS FETCHED INVOKED @fetchAccessibilityStatus:', rt_stop_id);

  const MTA_API_URL = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fnyct_ene_equipments.json`;
  const [data, error] = await fetchHandler(MTA_API_URL);
  if (error) return [null, error];

  const lastUpdated = unixConverter(data.header.date); //time entire alert dataset was updated, converted to readable timestamp
  const rtAccessibility = Array.isArray(data) ? data
    .filter((equipObj) => equipObj.elevatorsgtfsstopid === rt_stop_id.slice(0, 3)) //filtering objs comparing the slice of the 4 char Transit App API rt_stop_id to get the relational accessibility data at that station
    .map((routeEquipObj) => {
      return {
        equip_type: routeEquipObj.equipmenttype, //elevator or escalator
        equip_no: routeEquipObj.equipmentno, //specific el or esc id num
        rt_stop_id: routeEquipObj.elevatorsgtfsstopid, //same value as the given rt_stop_id just no cardinal S or N for uptown/downtown
        operational_status: routeEquipObj.isActive, //1 for operational, 0 for not, and 2 for info out of date
        wheelchair: routeEquipObj.ADA, //if station is ADA compliant or not; Y for yes, N for no
        serving: routeEquipObj.serving, //defining the access point -> boarding location; ex. "125 St & Broadway (SW corner) to mezzanine"
      }
    }) : null;

  const routeStatus = {
    lastUpdated,
    rtAccessibility
  };

  return [routeStatus, null];
};