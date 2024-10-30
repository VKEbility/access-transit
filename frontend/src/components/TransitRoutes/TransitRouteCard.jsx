import RouteIcon from './RouteIcon';
import AccessibilityStatusContainer from './AccessibilityStatusContainer';
import CountdownTimer from '../../hooks/CountdownTimer';
import '../../styles/routes.css';

export default function TransitRouteCard({ route, onTimerEnd }) {
  const itineraries = route.itineraries || [];
  const closestStop = itineraries[0]?.closestStop || {}; //rendering uptown stop for now
  const realtimeArrival = itineraries[0]?.realTimeArrivals[0] || {};
  const departure = realtimeArrival?.departureTime;
  const longName = route.longName || '';
  const isOutOfCommission = !realtimeArrival || Object.keys(realtimeArrival).length === 0;

  return (
    <>
      <div className="transit-card" style={{ backgroundColor: isOutOfCommission ? '#d3d3d3' : `#${route.color}` }}>
        <div id="estimated-arrival-time">
          {departure ? (
            <CountdownTimer departure={departure} onComplete={onTimerEnd} /> //passing prop state down
          ) : 'N/A'}
        </div>
        <RouteIcon route={route} />
        {closestStop.stopName && <div style={{ margin: 0 }}>{closestStop.stopName}</div>}
        <div style={{ margin: 0 }}>{longName}</div>
        <AccessibilityStatusContainer rtStopId={closestStop.rtStopId} />
      </div>
    </>
  );
};
