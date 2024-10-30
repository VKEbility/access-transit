import { useState, useEffect } from 'react';
import { fetchRouteAccessibility } from '../../adapters/transit-adapter';
import AccessibilityIcons from '../TransitRoutes/AccessibilityIcons';

export default function AccessibilityStatus({ rtStopId }) {
  const [accessibility, setAccessibility] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const loadRtAccessibility = async () => {
      console.log('BEFORE @loadRtAccessibility():', rtStopId);
      if (!rtStopId) return console.warn('No rt_stop_id given');
      const [equips, error] = await fetchRouteAccessibility(rtStopId);
      if (error) return setErrorText(error.msg);
      if (equips) console.log('AFTER @loadRtAccessibility():', equips); //to help debug

      setAccessibility(equips);
    }

    loadRtAccessibility();
  }, [rtStopId]);


  return (
    <div className="accessibility-status">
      {errorText && <p className="error-text">{errorText}</p>}
      <AccessibilityIcons accessibility={accessibility} />
    </div>
  );
};
