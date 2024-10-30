import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";
import { FaRegHeart, FaHeart} from "react-icons/fa";
import RouteIcon from '../TransitRoutes/RouteIcon';
import CountdownTimer from '../../hooks/CountdownTimer';
import '../../styles/routes.css';
import { useFavorites } from "../Favoriting";

const accessibilityIcons = [
  { icon: FaWheelchair, label: 'Wheelchair' },
  { icon: MdOutlineElevator, label: 'Elevator' },
  { icon: GiEscalator, label: 'Escalators' },
  { icon: FiAlertTriangle, label: 'Alert' }
];

export default function TransitRouteCard({ route, onTimerEnd }) {
  const itineraries = route.itineraries || [];
  const closestStop = itineraries[0]?.closestStop || {}; //rendering uptown stop for now
  const realtimeArrival = itineraries[0]?.realTimeArrivals[0] || {};
  const departure = realtimeArrival?.departureTime;
  const longName = route.longName || '';
  const isOutOfCommission = !realtimeArrival || Object.keys(realtimeArrival).length === 0;
  // const { isFavorite, toggleFavorite } = useFavorites(); // Get the favorites and toggleFavorite from the hook

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

        <div id="accessibility-icons-container" aria-label="Accessibility Features">
          {closestStop.wheelchairBoarding && accessibilityIcons.map(({ icon: Icon, label }) => (
            <Icon key={label} aria-label={label} />
          ))}
        </div>
        {/* <div onClick={toggleFavorite} className="favorite-button" id="card-button">
          {isFavorite ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
        </div> */}
      </div>
    </>
  );
};