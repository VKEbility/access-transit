import { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import DragMap from './DragMap';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

export default function MapContainerComponent({ setCoords }) { //inits coords based on user's current location then -> passes setCoords to DragMap
  const [position, setPosition] = useState([40.7128, -74.0060]); //setting where the location pin will be

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
      setCoords({ lat: latitude, lon: longitude }); //changed default coords passed from nearbyRoutesContainer to current users' coords
    },
      (error) => console.error("Error getting location: ", error));
  }, []);

  return (
    <MapContainer center={position} zoom={12} className="map-container">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <DragMap position={position} setCoords={setCoords} />
      <Marker position={position} />
    </MapContainer>
  );
};
