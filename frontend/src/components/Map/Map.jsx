import { useState, useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import DragMap from './DragMap';
import 'leaflet/dist/leaflet.css';
import '../../styles/map.css';

export default function MapContainerComponent({ setCoords }) {
  const [position, setPosition] = useState([40.7128, -74.0060]); ////setting where the location pin will be; defaulting to nyc
  const [loading, setLoading] = useState(true);

  useEffect(() => { //getting user's location when refreshing page
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setCoords({ lat: latitude, lon: longitude });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location: ", error);
          setLoading(false);
        }
      );
    };

    getLocation();
  }, [setCoords]);

  if (loading) return <div>Loading map...</div>;

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
