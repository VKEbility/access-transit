// import React, { useEffect, useState } from 'react';
// import { FiAlertTriangle } from "react-icons/fi";
// import { FaWheelchair } from "react-icons/fa";
// import { MdOutlineElevator } from "react-icons/md";
// import { GiEscalator } from "react-icons/gi";
// import AccessibleStations from '../components/AccessibleStations';
// import AccessibilityStatus from '../components/AccessibilityStatus';

// const accessibilityIcons = [
//   { icon: FaWheelchair, label: 'Wheelchair' },
//   { icon: MdOutlineElevator, label: 'Elevator' },
//   { icon: GiEscalator, label: 'Escalators' },
//   { icon: FiAlertTriangle, label: 'Alert' }
// ];

// const trainIcons = [
//   '1', '2', '3', '4', '5', '6', '6d', '7', '7d', 'a', 'b',
//   'c', 'd', 'e', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'q', 
//   'r', 's', 'sf', 'sir', 'sr', 't', 'w', 'z'
// ];

// const TransitCard = ({ iconPath, idx, cardColor }) => (
//   <div
//   className="transit-card"
//   style={{ backgroundColor: cardColor }} // Set background with 46% opacity
// >
//     <img
//       src={iconPath}
//       alt={`Transit logo ${idx + 1}`}
//       className="transit-logo"
//     />
//     <p id="estimated-arrival-time">4 mins</p>
//     <div id="accessibility-icons-container" aria-label="Accessibility Features">
//     {accessibilityIcons.map(({ icon: Icon, label }) => (
//         <div className="accessibility-icon" key={label}>
//           <Icon aria-hidden="true" />
//     </div>
//       ))}
//     </div>
//   </div>
// );

// // Convert hex to RGB
// // const hexToRGB = (hex) => {
// //   let r = 0, g = 0, b = 0;
// //   if (hex.length === 4) {
// //     r = parseInt(hex[1] + hex[1], 16);
// //     g = parseInt(hex[2] + hex[2], 16);
// //     b = parseInt(hex[3] + hex[3], 16);
// //   } else if (hex.length === 7) {
// //     r = parseInt(hex[1] + hex[2], 16);
// //     g = parseInt(hex[3] + hex[4], 16);
// //     b = parseInt(hex[5] + hex[6], 16);
// //   }
// //   return `${r}, ${g}, ${b}`;
// // };

// export default function LandingPage() {
//   const [loadedTrainIcons, setLoadedTrainIcons] = useState([]);
//   const [cardColors, setCardColors] = useState([]);

//   useEffect(() => {
//     const loadIcons = async () => {
//       const icons = await Promise.all(
//         trainIcons.map(icon => import(`../assets/icons/mta-train-icons/${icon}.svg`))
//       );
//       setLoadedTrainIcons(icons.map(icon => icon.default));
      
//       // Load and extract the color from each SVG
//       const colors = await Promise.all(
//         icons.map(icon => extractIconColor(icon.default))
//       );
//       setCardColors(colors);
//     };

//     loadIcons();
//   }, []);

//   // Function to extract the color from the SVG
//   const extractIconColor = async (svgPath) => {
//     const response = await fetch(svgPath);
//     const svgText = await response.text();
//     const parser = new DOMParser();
//     const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
//     const circle = svgDoc.querySelector('circle'); // Assuming the color is in the <circle> element
//     return circle ? circle.getAttribute('fill') : '#FFFFFF'; // Default to white if no color
//   };

//   return (
//     <>
//       <header>
//         <h1 id="site-title-logged-in">Welcome to #Access Transit</h1>
//       </header>
//       <div id="home-flex-container">
//         <div id="access-transit-map"></div>
//         <input
//           type="text"
//           placeholder="Where to?"
//           id="transitSearch"
//           name="transitSearch"
//           aria-label="Transit Search"
//         />
//       </div>
//       <div id="transit-card-title">
//         <h2 id="section-title">Cards</h2>
//         <div id="transit-cards-structure">
//           <div id="transit-cards-container">
//             {loadedTrainIcons.map((path, i) => (
//               <TransitCard
//                 key={i}
//                 iconPath={path}
//                 idx={i}
//                 cardColor={cardColors[i]} // Pass in the extracted color
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";

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

const TransitCard = ({ iconPath, idx, cardColor, stationName, direction, accessibility, alternativeRoute }) => (
  <div
    className="transit-card"
    style={{ backgroundColor: cardColor }} // Set background with 46% opacity
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
          <button key={label} className="accessibility-button">
            <Icon aria-hidden="true" /> {label}
          </button>
        )
      ))}
    </div>
  </div>
);

export default function LandingPage() {
  const [loadedTrainIcons, setLoadedTrainIcons] = useState([]);
  const [cardColors, setCardColors] = useState([]);
  const [trainData, setTrainData] = useState([]);

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
                cardColor={cardColors[i]} // Pass in the extracted color
                stationName={trainData[i]?.stationName || 'N/A'} // Use data from API
                direction={trainData[i]?.direction || 'Unknown'} // Use data from API // Use alternative route
                accessibility={trainData[i]?.accessibility || {}} // Use data from API
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}