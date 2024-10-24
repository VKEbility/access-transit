import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { accessibilityIcons } from './TrainAndAccessibilityIcon';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const TransitCard = ({ iconPath, idx, cardColor, stationName, direction, accessibility, isFavorite, toggleFavorite, trainData }) => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleLike = (e) => {
      e.preventDefault()
      console.log("USERID", currentUser.id)
      console.log(trainData)
      // addFav()
      console.log('Liked')
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
    <p id="train-direction">Direction: {direction}</p>
    <p id="station-name">Station: {stationName}</p>
    <div id="accessibility-icons-container" aria-label="Accessibility Features">
      {accessibilityIcons.map(({ icon: Icon, label, key }) => (
        accessibility[key]?.isActive && (
          <div key={label} className="accessibility-button" id="card-button">
            <Icon aria-hidden="true" /> 
          </div>
        )
      ))}
      {isFavorite ? <AiFillStar aria-hidden="true" type='button' /> 
        : 
          <AiOutlineStar aria-hidden="true" type='button'  onClick={handleLike}/>
      }
    </div>
  </div>
  )
}