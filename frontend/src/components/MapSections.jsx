import MapContainerComponent from '../components/MapContainer';
import LocationSearch from '../components/LocationSearch';

export default function MapSection({ setCoords }) {
  return (
    <div id="access-transit-map">
      <MapContainerComponent setCoords={setCoords} />
      <LocationSearch setCoords={setCoords} />
    </div>
  );
};