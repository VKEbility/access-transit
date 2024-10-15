import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/current-user-context';
import NavBar from '../components/NavBar';

export default function HomePage() {
  const { currentUser } = useContext(CurrentUserContext)
  // const [isAuthorized, setIsLoggedIn] = useState(false); // Track login status
  // const [username, setUsername] = useState(''); // Track the username
  // const [loading, setLoading] = useState(true); // Track loading state

  // Fetch the login status from the backend API when the component mounts
  // useEffect(() => {
  //   const checkSignInStatus = async () => {
  //     try {
  //       const response = await fetch('/api/check-signin'); //dont need; use usrontext to determine if user is authenticated with cookies
  //       const data = await response.json();
        
  //       if (data.isAuthorized) {
  //         setIsLoggedIn(true); // User is signed in
  //         setUsername(data.username); // Store the username
  //       } else {
  //         setIsLoggedIn(false); // User is not signed in
  //       }
  //       setLoading(false); // Loading is done
  //     } catch (error) {
  //       console.error('Error checking sign-in status:', error);
  //       setLoading(false); // Ensure loading ends even on error
  //     }
  //   };

  //   checkSignInStatus();
  // }, []); // Empty array means this effect runs once when the component mounts

  // If loading, show a loading spinner or message
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {currentUser && <NavBar/> ? (
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
        <img id="train-logo" src="/train-icons/1-digit.svg"></img>
  
        <div className="train-logos-container">
    
      
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
        <p>Please <a id="log-in-redirection" href="/login">log in</a> to access your account.</p>
        <div id="site-description-container">
          <p id="site-description">The most trusted source, real time status of yout favorite MTA <strong> elevators,
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
