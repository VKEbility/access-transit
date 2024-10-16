import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context';
import NavBar from '../components/NavBar';


// import GetIcons from '../components/TrainLogo';
export default function HomePage() {
  const { currentUser } = useContext(CurrentUserContext)
  const trainLogos = [
    '/train-icons/1.svg',
    '/train-icons/2.svg',
    '/train-icons/3.svg',
    '/train-icons/4.svg',
    
  ]
  return (
    <>
      {currentUser ? (
        <>
        <h1 id="site-title-logged-in">Welcome to #Access Transit</h1>
  <div id="home-flex-container">
    <div id="access-transit-map">

    </div>
  </div>
  <h1 id="transit-card-title">Cards</h1>
  <div id="transit-cards-structure">
    <div id="transit-cards-container">
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
          {/* Use the GetIcons component and pass the current trainLineName */}
          {/*<GetIcons/>*/}
          
          {/* Add some buttons or controls to change trainLineName dynamically if needed */}
          <div id="accessibility-icons-container">
            <div id="wheelchair-icon">Wheelchair</div>
            <div id="elevator-icon">Elevator</div>
            <div id="escalators-icon">Escalators</div>
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
