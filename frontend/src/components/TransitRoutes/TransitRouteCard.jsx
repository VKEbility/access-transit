import { useState } from 'react';
import RouteIcon from './RouteIcon';
import AccessibilityStatusContainer from './AccessibilityStatusContainer';
import CountdownTimer from '../../hooks/CountdownTimer';
import '../../styles/routes.css';

export default function TransitRouteCard({ route, onTimerEnd }) {
  const [currDirection, setCurrDirection] = useState(0); //state for direction swipe- 0 for uptown, 1 for downtown

  const itineraries = route.itineraries || [];
  const uptown = itineraries.find(it => it.directionId === 0) || {}; //obj { closestStop{}, directionHeadsign, directionId, headsign, mergedHeadsign, closestStop, realTimeArrivals }
  const downtown = itineraries.find(it => it.directionId === 1) || {};

  const currItinerary = currDirection === 0 ? uptown : downtown;
  const closestStop = currItinerary.closestStop || {}; //rendering the closest stop of whichever itinerary view currDirection state is on
  const realtimeArrival = currItinerary.realTimeArrivals[0] || {};
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
