import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";

const accessibilityIcons = [
  { icon: FaWheelchair, label: 'Wheelchair' },
  { icon: MdOutlineElevator, label: 'Elevator' },
  { icon: GiEscalator, label: 'Escalators' },
  { icon: FiAlertTriangle, label: 'Alert' }
];

export default function AccessibilityIcons({ closestStop }) {
  return (
    <div id="accessibility-icons-container" aria-label="Accessibility Features">
      {closestStop.wheelchairBoarding && accessibilityIcons.map(({ icon: Icon, label }) => (
        <Icon key={label} aria-label={label} />
      ))}
    </div>
  );
}
