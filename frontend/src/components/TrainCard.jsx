import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { accessibilityIcons } from './TrainAndAccessibilityIcon';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { listFavs, addFav, removeFav } from '../adapters/fav-adapter';
import { listFavs, addFav, removeFav } from '../adapters/fav-adapter';

// // export const TransitCard = ({ iconPath, idx, cardColor, stationName, direction, accessibility, isFavorite, toggleFavorite, trainData }) => {
export const TransitCard = ({ iconPath, idx, cardColor, equipmentNo, accessibility, isFavorite, toggleFavorite }) => {
  export const TransitCard = ({ iconPath, idx, cardColor, equipmentNo, accessibility, isFavorite, toggleFavorite }) => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    const user_id = currentUser;
    const handleAddingFav = (e) => {
      e.preventDefault();
      console.log("USERID", user_id);
      console.log("HELLO", equipmentNo);
      addFav(user_id, equipmentNo);
      console.log('Liked');
    }

    return (
      <div
        className="transit-card"
        style={{ backgroundColor: cardColor }}
      >
        <img
          src={iconPath}
          alt={`Transit logo ${idx + 1}`}
          className="transit-logo"
        />
        {/* <p id="train-direction">Direction: {direction}</p>
    <p id="station-name">Station: {stationName}</p> */}
        <p id="equipment-number">Equipment Number: {equipmentNo}</p>
        <div id="accessibility-icons-container" aria-label="Accessibility Features">
          {accessibilityIcons.map(({ icon: Icon, label, key }) => (
            accessibility[key]?.isActive && (
              <div key={label} className="accessibility-button" id="card-button">
                <Icon aria-hidden="true" />
              </div>
            )
          ))}
          {isFavorite ?
            // already favorited? then unfavorite it 
            <AiFillStar aria-hidden="true" type='button' />
            :
            // not favorite? then favorite it 
            <AiOutlineStar aria-hidden="true" type='button' onClick={handleAddingFav} />
          }
        </div>
      </div>
    )
  }
