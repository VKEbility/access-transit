import { Link } from 'react-router-dom';

const satisfiedUsers = ['picURL1', 'picURL2', 'picURL3'];

//onboarding page to be shown on home path if user is not logged in
export default function OnboardingPage() {
  return (
    <main id="welcome-portion">
      <header id="welcome-header">
        <div id="welcome-button-container">
          <Link to="/about">
            <button id='welcome-button-link'>About</button>
          </Link>
          <Link to="/alerts">
            <button id='welcome-button-link'>Service Alerts</button>
          </Link>
          <Link to="/accessibility-status">
            <button id='welcome-button-link'>See Status</button>
          </Link>
        </div>
        <h1 id="site-title-not-logged-in">Welcome To #AccessTransit</h1>
      </header>

      <div id="satisfied-users-image-container">
        {satisfiedUsers.map((_, index) => (
          <div key={index} className="satisfied-users"></div>
        ))}
      </div>

      <div id="site-description-container">
        <p id="site-description">
          The most trusted source for real-time status of your favorite MTA <strong>elevators, escalators, ADA stations</strong>, and <strong>subway alerts</strong> in YOUR language.
        </p>
        <p id="site-description">Status updated by users like you.</p>
      </div>

      <button id="select-language-button">Select language to get started</button>
    </main>
  );
};
