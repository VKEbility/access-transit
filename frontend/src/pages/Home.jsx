import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import OnboardingPage from '././Onboarding';
import LandingPage from './Landing';

export default function HomePage() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      {currentUser ? <LandingPage /> : <OnboardingPage />}
    </div>
  );
};
