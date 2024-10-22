import { useState, useEffect } from 'react';
import { getAllADAStations } from '../adapters/ada-adapter';

export default function AccessibleStations() {
  const [accessibleTrainStations, setTrainStations] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const loadADA = async () => {
      const [ada, error] = await getAllADAStations();
      if (error) return setErrorText(error.msg);

      setTrainStations(ada);
    };

    loadADA();
  }, []);

  return (
    <div>
      <h1>ADA Compliant Stations</h1>
      {errorText && <p>Error: {errorText}</p>}
      <ul>
        {accessibleTrainStations.length > 0 ? (
          accessibleTrainStations.map(({ stop_name, gtfs_stop_id }) => (
            <li key={gtfs_stop_id}>
              <p>{stop_name}</p>
            </li>
          ))
        ) : (
          <p>No ADA compliant stations found. Please try again later.</p>
        )}
      </ul>
    </div>
  );
}
