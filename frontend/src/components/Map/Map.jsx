import { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Loader } from '@mantine/core';
import DragMap from './DragMap';
import 'leaflet/dist/leaflet.css';
import '../../styles/map.css';

export default function MapContainerComponent({ setCoords, setMapReady }) {
  const [position, setPosition] = useState([40.7128, -74.0060]); //state to hold the default marker position; init to lower manhattan- same as in landing
  const [loading, setLoading] = useState(true);

  useEffect(() => { //effect to get the user's curr location when the component mounts/starts up
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords; //extracting coords from position
          setPosition([latitude, longitude]); //updating position state with user's curr location
          setCoords({ lat: latitude, lon: longitude }); //passing user's coords to parent
          setLoading(false);
          setMapReady(true); //to pass to TransitRoutesContainer when nearby routes are ready to be fetched
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLoading(false);
        }
      );
    };

    getLocation();
  }, [setCoords, setMapReady]);

  useEffect(() => { //effect to update parent coords when position state of the marker changes
    setCoords({ lat: position[0], lon: position[1] }); //updating parent with the new position
  }, [position, setCoords]); //having effect run whenever position changes

  if (loading) return <Loader />;

  return (
    <>
      <div className="map-container">
        <MapContainer center={position} zoom={16}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DragMap position={position} setCoords={setCoords} />
          <Marker position={position} />
        </MapContainer>
      </div>
    </>
  );
};
