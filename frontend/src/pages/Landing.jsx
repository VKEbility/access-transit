import React, { useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";
import AccessibleStations from '../components/AccessibleStations';
import AccessibilityStatus from '../components/AccessibilityStatus';

const accessibilityIcons = [
  { icon: FaWheelchair, label: 'Wheelchair' },
  { icon: MdOutlineElevator, label: 'Elevator' },
  { icon: GiEscalator, label: 'Escalators' },
  { icon: FiAlertTriangle, label: 'Alert' }
];

const trainIcons = [
  '1', '2', '3', '4', '5', '6', '6d', '7', '7d', 'a', 'b',
  'c', 'd', 'e', 'f', 'g', 'h', 'j', 'l', 'm', 'n',
  'q', 'r', 's', 'sf', 'sir', 'sr', 't', 'w', 'z'
]

const TransitCard = ({ iconPath, idx }) => ( //later pass in nearby routes obj to render the rest conditionally if present
  <div className="transit-card">
    <img
      src={iconPath}
      alt={`Transit logo ${idx + 1}`}
      className="transit-logo"
    />
    <p id="estimated-arrival-time">4 mins</p>
    <div id="accessibility-icons-container" aria-label="Accessibility Features">
      {accessibilityIcons.map(({ icon: Icon, label }) => (
        <div className="accessibility-icon" key={label}>
          <Icon aria-hidden="true" /> <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function LandingPage() {
  const [loadedTrainIcons, setLoadedTrainIcons] = useState([]);

  useEffect(() => {
    const loadIcons = async () => {
      const icons = await Promise.all( //doing this as imports return a promise
        trainIcons.map(icon => import(`../assets/icons/mta-train-icons/${icon}.svg`))
      );
      setLoadedTrainIcons(icons.map(icon => icon.default));
    };

    loadIcons();
  }, []);

  return (
    <>
      <header>
        <h1 id="site-title-logged-in">Welcome to #Access Transit</h1>
      </header>
      <div id="home-flex-container">
        <div id="access-transit-map"></div>
        <input
          type="text"
          placeholder="Where to?"
          id="transitSearch"
          name="transitSearch"
          aria-label="Transit Search"
        />
      </div>
      <div id="transit-card-title">
        <h2 id="section-title">Cards</h2>
        <div id="transit-cards-structure">
          <div id="transit-cards-container">
            {loadedTrainIcons.map((path, i) => (
              <TransitCard key={i} iconPath={path} idx={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
