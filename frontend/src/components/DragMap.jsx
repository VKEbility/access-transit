import { Marker, useMapEvents } from 'react-leaflet';

const DragMap = ({ position, setCoords }) => { //uses setCoords to update coords when the map is dragged or the marker is moved
  const map = useMapEvents({
    dragend: () => {
      const newCoords = map.getCenter();
      setCoords({ lat: newCoords.lat, lon: newCoords.lng }); //if user drags the map, reset coords passed of user's location passed in from MapContainer to now be the map position dragged to in client
    },
  });

  return (
    <Marker
      position={position}
      draggable
      eventHandlers={{
        dragend: (event) => {
          const marker = event.target;
          const { lat, lng } = marker.getLatLng(); // get new position after dragging
          setCoords({ lat: lat, lon: lng }); //update setCoords state
          console.log(lat, lon, 'map dragged')
          map.setView([lat, lng]); //centering map on new position
        },
      }}
    />
  );
};

export default DragMap;
