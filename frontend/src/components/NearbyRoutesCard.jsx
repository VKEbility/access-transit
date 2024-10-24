import AccessibilityStatus from './AccessibilityStatus';

const NearbyRoutesCard = ({ route }) => {
  console.log('BEFORE @NearbyRoutesCard():', route);
  const closestStop = route.itineraries[0]?.closestStop;
  const realtimeArrival = route.itineraries[0]?.realTimeArrivals[0]
  const departure = realTimeArrival?.departureTime;
  console.log('closest stop:', closestStop);
  console.log('Real Time Arrivals:', realtimeArrival);
  console.log('departure:', departure);

  return (
    <div className="route-card">
      <h2>{route.shortName}</h2>
      {closestStop && <p>{closestStop.stopName}</p>}
      <p>{route.longName}</p>
      <p>{departure ? formatTime(departure) : 'N/A'}</p>
      {/* {closestStop && <AccessibilityStatus rtStopId={closestStop.rtStopId} />} */}
    </div>
  );
};

const formatTime = (time) => { //helper func to format departure time from ISO format
  const date = new Date(time);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); //formats to HH:MM AM/PM
};

export default NearbyRoutesCard;

