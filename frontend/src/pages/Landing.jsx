import React, { useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";
import NearbyRoutesContainer from '../components/NearbyRoutesContainer';
import MapContainerComponent from '../components/MapContainer';
import LocationSearch from '../components/LocationSearch';

const accessibilityIcons = [
  { icon: FaWheelchair, label: 'Wheelchair' },
  { icon: MdOutlineElevator, label: 'Elevator' },
  { icon: GiEscalator, label: 'Escalators' },
  { icon: FiAlertTriangle, label: 'Alert' }
];

const trainIcons = [
  '1', '2', '3', '4', '5', '6', '6d', '7', '7d', 'a', 'b',
  'c', 'd', 'e', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'q',
  'r', 's', 'sf', 'sir', 'sr', 't', 'w', 'z'
];

const TransitCard = ({ iconPath, idx, cardColor }) => (
  <div
    className="transit-card"
    style={{ backgroundColor: cardColor }} //46% opacity
  >
    <img
      src={iconPath}
      alt={`Transit logo ${idx + 1}`}
      className="transit-logo"
    />
    <p id="estimated-arrival-time">4 mins</p>
    <div id="accessibility-icons-container" aria-label="Accessibility Features">
    </div>
  </div>
);

// Convert hex to RGB
// const hexToRGB = (hex) => {
//   let r = 0, g = 0, b = 0;
//   if (hex.length === 4) {
//     r = parseInt(hex[1] + hex[1], 16);
//     g = parseInt(hex[2] + hex[2], 16);
//     b = parseInt(hex[3] + hex[3], 16);
//   } else if (hex.length === 7) {
//     r = parseInt(hex[1] + hex[2], 16);
//     g = parseInt(hex[3] + hex[4], 16);
//     b = parseInt(hex[5] + hex[6], 16);
//   }
//   return `${r}, ${g}, ${b}`;
// };

export default function LandingPage() {
  const [loadedTrainIcons, setLoadedTrainIcons] = useState([]);
  const [coords, setCoords] = useState({ lat: 40.7128, lon: -74.0060 }); //passing coords as props to nested components that will use them for data fetching throughout our frontend 
  const [cardColors, setCardColors] = useState([]);
  const [trainData, setTrainData] = useState([]);
  const [favorites, setFavorites] = useState(new Set()); // Track favorite stations by index

  useEffect(() => {
    const loadIcons = async () => {
      const icons = await Promise.all(
        trainIcons.map(icon => import(`../assets/icons/mta-train-icons/${icon}.svg`))
      );
      setLoadedTrainIcons(icons.map(icon => icon.default));

      // Load and extract the color from each SVG
      const colors = await Promise.all(
        icons.map(icon => extractIconColor(icon.default))
      );
      setCardColors(colors);
    };

    loadIcons();
    fetchTrainData();
  }, []);

  const fetchTrainData = async () => {
    try {
      const response = await fetch('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fnyct_ene_equipments.json');
      const data = await response.json();

      console.log('API Response:', data);

      // Extract relevant data: station name, direction, accessibility info, and alternative route
      const formattedData = data.map(station => ({
        // stationName: item.station, // Station name
        // direction: item.trainno, // Using train number as direction // Alternative route instructions
        equipmentNo: station.equipmentno,
        accessibility: {
          wheelchair: { isActive: station.ADA === 'Y' }, // Wheelchair accessible if ADA is 'Y'
          elevator: { isActive: station.isactive === 'Y' }, // Elevator active status
          escalator: { isActive: false }, // Placeholder, set according to your needs
          alert: { isActive: false } // Placeholder, set according to your needs
        }
      }));

      setTrainData(formattedData);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  };

  // Function to extract the color from the SVG
  const extractIconColor = async (svgPath) => {
    const response = await fetch(svgPath);
    const svgText = await response.text();
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
    const circle = svgDoc.querySelector('circle'); // Assuming the color is in the <circle> element
    return circle ? circle.getAttribute('fill') : '#FFFFFF'; // Default to white if no color
  };


  const toggleFavorite = (index) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(index)) {
        newFavorites.removeFav(index); // Remove from favorites
      } else {
        newFavorites.addFav(index); // Add to favorites
      }
      return newFavorites;
    });
  };

  return (
    <>
      <header>
        <h1 id="site-title-logged-in">Welcome to #AccessTransit</h1>
      </header>
      <div id="home-flex-container">
        <div id="access-transit-map">
          <MapContainerComponent setCoords={setCoords} />
          <LocationSearch setCoords={setCoords} />
        </div>
      </div>
      <div id="transit-card-title">
        <h2 id="section-title">Nearby Routes</h2>
        <div id="transit-cards-structure">
          <div id="transit-cards-container">
            <NearbyRoutesContainer coords={coords} setCoords={setCoords} />
            {loadedTrainIcons.map((path, i) => (
              <TransitCard
                key={i}
                iconPath={path}
                idx={i}
                cardColor={cardColors[i]}
<<<<<<< HEAD
                // stationName={trainData[i]?.stationName || 'N/A'}
                // direction={trainData[i]?.direction || 'Unknown'}
                equipmentNo={trainData[i]?.equipmentNo || 'N/A'}
                // stationName={trainData[i]?.stationName || 'N/A'}
                // direction={trainData[i]?.direction || 'Unknown'}
                equipmentNo={trainData[i]?.equipmentNo || 'N/A'}
                accessibility={trainData[i]?.accessibility || {}}
                isFavorite={favorites.has(i)} // Check if this card is a favorite
                toggleFavorite={() => toggleFavorite(i)} // Pass down toggle function
                trainData={trainData}
=======
>>>>>>> 090609a (merging eileens commits)
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
