import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

export default function DragMap({ position, setCoords }) { //uses setCoords prop to update coords when map is dragged
  const [draggedPosition, setDraggedPosition] = useState(position); //init state to hold the position of the draggable marker

  const map = useMapEvents({ // using leaflet map event func to listen for the dragend event on the map (when user drags and releases map)
    dragend: () => { //getting the new center coords after dragging the map
      const { lat, lng } = map.getCenter(); //extracting coords from the new center of the map
      console.log('Map dragged @DragMap.jsx to:', lat, lng); //to help debug
      setDraggedPosition({ lat, lng }); //updating the local state with the new position
      setCoords({ lat, lon: lng }); //passing updated coords to the parent Map component
    },
  });

  return (
    <Marker
      position={draggedPosition} //setting marker's position to the current state
      draggable //enabling the marker to be dragged and moved around by user
      eventHandlers={{
        dragend: (event) => { //triggered when the marker is dragged and released
          const marker = event.target;
          const { lat, lng } = marker.getLatLng(); //getting the marker's new lat and lon
          console.log('Marker dragged @DragMap.jsx to:', lat, lng);
          setDraggedPosition({ lat, lng }); //updating the local state with the new marker position
          setCoords({ lat, lon: lng }); //passing the new coords to the parent component
        },
      }}
    />
  );
}
