import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import AccessibilityStatus from './AccessibilityStatus';
import { accessibilityIcons } from './TrainAndAccessibilityIcon';
// import { FaRegHeart, FaHeart} from "react-icons/fa";
import {listFavs, addFav, removeFav } from '../adapters/fav-adapter';

const NearbyRoutesCard = ({ route }) => {
  console.log('BEFORE @NearbyRoutesCard():', route);
  const closestStop = route.itineraries[0]?.closestStop;
  const realtimeArrival = route.itineraries[0]?.realTimeArrivals[0]
  const departure = realTimeArrival?.departureTime;
  console.log('closest stop:', closestStop);
  console.log('Real Time Arrivals:', realtimeArrival);
  console.log('departure:', departure);

  const user_id = currentUser;
  const fetchFavoriteList = listFavs(user_id);

  // const handleFavoriteClick = (e) => {
  //   e.preventDefault();
  //   console.log("USERID", user_id);
  //   console.log("HELLO", equipmentNo);
  //   addFav(user_id, rt_stop_id, stop_name, gtfs_lat, gtfs_lon);
  //   console.log('Liked');
  // }

  return (
    <div className="route-card">
      <h2>{route.shortName}</h2>
      {closestStop && <p>{closestStop.stopName}</p>}
      <p>{route.longName}</p>
      <p>{departure ? formatTime(departure) : 'N/A'}</p>
      {/* {closestStop && <AccessibilityStatus rtStopId={closestStop.rtStopId} />} */} 
      {/* <div onClick={toggleFavorite} className="favorite-button" id="card-button">
          {isFavorite ? 
          <FaHeart aria-hidden="true" /> 
          : <FaRegHeart aria-hidden="true"onClick={handleFavoriteClick} />}
      </div> */}
    </div>
  );
};

const formatTime = (time) => { //helper func to format departure time from ISO format
  const date = new Date(time);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); //formats to HH:MM AM/PM
};

export default NearbyRoutesCard;

