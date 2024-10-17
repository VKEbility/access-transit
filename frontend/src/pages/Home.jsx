import React, { useContext, useRef, useEffect } from 'react';
import CurrentUserContext from '../contexts/current-user-context';
import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";
import AccessibleStations from '../components/AccessibleStations';
import EquipmentStatus from '../components/EquipmentStatus';

// import GetIcons from '../components/TrainLogo';
export default function HomePage() {
  
  const { currentUser } = useContext(CurrentUserContext)

  const icon = {
    alert: FiAlertTriangle,
    wheelchair: FaWheelchair,
    elevator: MdOutlineElevator,
    escalator: GiEscalator
  };

  const trainLogos = [
    '/train-icons/1.svg',
    '/train-icons/2.svg',
    '/train-icons/3.svg',
    '/train-icons/4.svg',
    '/train-icons/5.svg',
    '/train-icons/6.svg',
  ]

  const cardsContainerRef = useRef(null);  // Reference to the transit card container

  useEffect(() => {
    if (cardsContainerRef.current) {
      // Clear the container before rendering new cards
      cardsContainerRef.current.innerHTML = "";

      // Use forEach to append each transit card
      trainLogos.forEach((logoPath, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "transit-cards";

        // Create train logo image
        const img = document.createElement("img");
        img.src = logoPath;
        img.alt = `Train logo ${index + 1}`;
        img.className = "train-logo";

        // Create estimated arrival paragraph
        const estimate = document.createElement("p");
        estimate.id = "train-estimate";
        estimate.innerText = "4 mins";

        // Create accessibility icons container
        const iconsContainer = document.createElement("div");
        iconsContainer.id = "accessibility-icons-container";

        const wheelchairIcon = document.createElement("div");
        wheelchairIcon.className = "accessibility-icon";
        wheelchairIcon.innerHTML = `<span>WheelChair</span>`;
        iconsContainer.appendChild(wheelchairIcon);

        const elevatorIcon = document.createElement("div");
        elevatorIcon.className = "accessibility-icon";
        elevatorIcon.innerHTML = `<span>Elevator</span>`;
        iconsContainer.appendChild(elevatorIcon);

        const escalatorIcon = document.createElement("div");
        escalatorIcon.className = "accessibility-icon";
        escalatorIcon.innerHTML = `<span>Escalators</span>`;
        iconsContainer.appendChild(escalatorIcon);

        const alertIcon = document.createElement("div");
        alertIcon.className = "accessibility-icon";
        alertIcon.innerHTML = `<span>Alert</span>`;
        iconsContainer.appendChild(alertIcon);

        // Append elements to the card div
        cardDiv.appendChild(img);
        cardDiv.appendChild(estimate);
        cardDiv.appendChild(iconsContainer);

        // Append card div to the main container
        cardsContainerRef.current.appendChild(cardDiv);
      });
    }
  }, [currentUser]); // Effect depends on currentUser

  return (
    <>
      {currentUser ? (
        <>
        <h1 id="site-title-logged-in">Welcome to #Access Transit</h1>
        <div id="home-flex-container">
    
    <div id="access-transit-map">

    </div>
    <input type="text" placeholder="Where to?" id="transitSearch" name="transitSearch"></input>
  </div>
  <h1 id="transit-card-title">Cards</h1>
  <div id="transit-cards-structure">
    <div id="transit-cards-container"ref={cardsContainerRef}>
    <div id="transit-cards">
        <div id="train-logo-container">
          {trainLogos.map((logoPath, index) => (
            <img
              key={index}
              src={logoPath}
              alt={`Train logo ${index + 1}`}
              className="train-logo"
            />
          ))}
        </div>
      
        <p id="train-estimate">4 mins</p>
          {/* Use the GetIcons component and pass the current trainLineName */}
          {/*<GetIcons/>*/}
          
          {/* Add some buttons or controls to change trainLineName dynamically if needed */}
          {/*
          <div id="accessibility-icons-container">
            <div id="wheelchair-icon">Wheelchair</div>
            <div id="elevator-icon">Elevator</div>
            <div id="escalators-icon">Escalators</div>
          </div> */}
          <div id="accessibility-icons-container">
              <div className="accessibility-icon">
                <FaWheelchair /> <span>Wheelchair</span>
              </div>
              <div className="accessibility-icon">
                <MdOutlineElevator /> <span>Elevator</span>
              </div>
              <div className="accessibility-icon">
                <GiEscalator /> <span>Escalators</span>
              </div>
              <div className="accessibility-icon">
                <FiAlertTriangle /> <span>Alert</span>
              </div>
            </div>

         </div>
         </div>
     </div>
</>
  ) : (
    // Not logged in version
      <div id="welcome-portion">
        <div id="welcome-button-container">
          <button> <a id="welcome-button-links" href="/see-status">See Status </a></button>
          <button> <a id="welcome-button-links" href="/services">Services</a></button>
          <button> <a id="welcome-button-links" href="/about">About</a></button>
        </div>
        <h1 id="site-title-not-logged-in">Welcome To #AccessTransit</h1>
         <div id="happy-people-image-container"> 
          <div id="happy-people">

          </div>
          <div id="happy-people">

          </div>
          <div id="happy-people">

          </div>
         </div>
        <p>Please <button><a id="welcome-button-links"href="/login">log in</a></button> to access your account.</p>
        <div id="site-description-container">
          <p id="site-description">The most trusted source, real time status of your favorite MTA <strong> elevators,
            escalators, ADA stations</strong> and <strong> subway alerts </strong> in YOUR language</p>
            <p id="site-description">
              Status updated by users like you
          </p>
        </div>
        <button id="select-language-button">Select language to get started</button>
     </div>
  )}
</>
   );
  };
