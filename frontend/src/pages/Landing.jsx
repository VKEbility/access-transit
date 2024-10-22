////// Second Edition
import React, { useEffect, useState } from 'react';
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

const trainIcons = [
  '1', '2', '3', '4', '5', '6', '6d', '7', '7d', 'a', 'b', 
  'c', 'd', 'e', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'q', 
  'r', 's', 'sf', 'sir', 'sr', 't', 'w', 'z'
];

const TransitCard = ({ iconPath, idx, cardColor, stationName, direction, accessibility, isFavorite, toggleFavorite }) => (
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
);


export default function LandingPage() {
  const [loadedTrainIcons, setLoadedTrainIcons] = useState([]);
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
      const formattedData = data.map(item => ({
        stationName: item.station, // Station name
        direction: item.trainno, // Using train number as direction // Alternative route instructions
        accessibility: {
          wheelchair: { isActive: item.ADA === 'Y' }, // Wheelchair accessible if ADA is 'Y'
          elevator: { isActive: item.isactive === 'Y' }, // Elevator active status
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
        newFavorites.delete(index); // Remove from favorites
      } else {
        newFavorites.add(index); // Add to favorites
      }
      return newFavorites;
    });
  };

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
              <TransitCard
                key={i}
                iconPath={path}
                idx={i}
                cardColor={cardColors[i]}
                stationName={trainData[i]?.stationName || 'N/A'}
                direction={trainData[i]?.direction || 'Unknown'}
                accessibility={trainData[i]?.accessibility || {}}
                isFavorite={favorites.has(i)} // Check if this card is a favorite
                toggleFavorite={() => toggleFavorite(i)} // Pass down toggle function
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}