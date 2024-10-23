import { Marker, useMapEvents } from 'react-leaflet';

export default function DragMap({ position, setCoords }) { //uses setCoords prop to update coords when map is dragged
  const map = useMapEvents({ //triggered when user stops dragging the map
    dragend: () => { //getting new position after dragging
      const { lat, lng } = map.getCenter(); //extracting coords from the new center of the map
      console.log('map dragged @DragMap.jsx to:', lat, lng); //to debug
      setCoords({ lat: lat, lon: lng }); //passing updated coords to the parent Map component
    },
  });

  return (
    <Marker
      position={position}
      draggable={false} //not letting the marker be draggable to improve UX as map itself can be dragged + is more intuitive
    />
  );
};
