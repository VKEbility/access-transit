const { fetchHandler } = require('../../shared/fetchingUtils.cjs');

exports.fetchAccessibilityStatus = async (rt_stop_id) => {
  console.log('STARTING @fetchAccessibilityStatus:', rt_stop_id);

  const MTA_API_URL = `https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fnyct_ene_equipments.json`;
  const [data, error] = await fetchHandler(MTA_API_URL);
  if (error) return [null, error];

  const routeStatus = data
    .filter((equipObj) => equipObj.elevatorsgtfsstopid === rt_stop_id.slice(0, 3))
    .map((routeEquipObj) => {
      return {
        equip_type: routeEquipObj.equipmenttype,
        equip_id: routeEquipObj.equipmentno,
        rt_stop_id: routeEquipObj.elevatorsgtfsstopid,
        operational_status: routeEquipObj.isActive,
        ADA: routeEquipObj.ADA,
        serving: routeEquipObj.serving,
      }
    });

  return [routeStatus, null];
};