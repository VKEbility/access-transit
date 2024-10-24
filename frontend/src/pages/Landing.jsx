////// Second Edition
import React, { useContext, useEffect, useState } from 'react';
import {accessibilityIcons, trainIcons} from '../components/TrainAndAccessibilityIcon';
import { TransitCard } from '../components/TrainCard';

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
                // stationName={trainData[i]?.stationName || 'N/A'}
                // direction={trainData[i]?.direction || 'Unknown'}
                equipmentNo={trainData[i]?.equipmentNo || 'N/A'}
                accessibility={trainData[i]?.accessibility || {}}
                isFavorite={favorites.has(i)} // Check if this card is a favorite
                toggleFavorite={() => toggleFavorite(i)} // Pass down toggle function
                trainData={trainData}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
