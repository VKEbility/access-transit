import React, { useEffect, useState } from 'react';
import { fetchAccessibilityTime } from '../../adapters/accessibility-status-adapters'; // Adjust path as necessary

export default function AccessibilityStatusTime() {
  const [accessibilityTime, setAccessibilityTime] = useState('');
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const loadAccessibilityTime = async () => {
      console.log('BEFORE @loadAccessibilityTime()');

      const [time, error] = await fetchAccessibilityTime(); // Fetch without any parameters
      if (error) return setErrorText(error); // Set the error message if fetching fails
      if (time) {
        console.log('AFTER @loadAccessibilityTime():', time); // For debugging
        setAccessibilityTime(time); // Set the time retrieved from the adapter
      }
    };

    loadAccessibilityTime();
  }, []); // Empty dependency array

  return (
    <div className="accessibility-status-time">
      {errorText && <p className="error-text">{errorText}</p>}
      {accessibilityTime && <p>{accessibilityTime}</p>} {/* Display the accessibility time */}
    </div>
  );
}
