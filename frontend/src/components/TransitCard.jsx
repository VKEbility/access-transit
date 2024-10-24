import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const accessibilityIcons = [
    { icon: FaWheelchair, label: 'Wheelchair', key: 'wheelchair' },
    { icon: MdOutlineElevator, label: 'Elevator', key: 'elevator' },
    { icon: GiEscalator, label: 'Escalator', key: 'escalator' },
    { icon: FiAlertTriangle, label: 'Alert', key: 'alert' }
  ];

export default function TransitCard ({ iconPath, idx, cardColor, stationName, direction, accessibility, isFavorite, toggleFavorite }){
    return (
    <>
    <div
      className="transit-card"
      style={{ backgroundColor: cardColor }} 
    >
      <img
        src={iconPath}
        alt={`Transit logo ${idx + 1}`}
        className="transit-logo"
      />
      <p id="train-direction">Direction: {direction}</p>
      <p id="station-name">Station: {stationName}</p>
      <div id="accessibility-icons-container" aria-label="Accessibility Features">
        {accessibilityIcons.map(({ icon: Icon, label, key }) => (
          accessibility[key]?.isActive && (
            <div key={label} className="accessibility-button" id="card-button">
              <Icon aria-hidden="true" /> 
            </div>
          )
        ))}
         <div onClick={toggleFavorite} className="favorite-button" id="card-button">
        {isFavorite ? <AiFillStar aria-hidden="true" /> : <AiOutlineStar aria-hidden="true" />}
      </div>
     </div>
    </div>
    </>)
};