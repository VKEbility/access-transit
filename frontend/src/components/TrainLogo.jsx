import React from 'react';

export default function GetIcons({ trainLineName }) {
    // Function to get the correct icon based on the train line name
    const getIcon = (cardTrain) => {
      // Array of image paths for train icons
      const iconSVG = [
        '/train-icons/1.svg',
        '/train-icons/2.svg',
        '/train-icons/3.svg',
        '/train-icons/4.svg',
        // Add more train images as needed
      ];
      
      // Array of train line names corresponding to each icon
      const trainLines = [
        'a', // Corresponds to 1.svg
        'b', // Corresponds to 2.svg
        'c', // Corresponds to 3.svg
        'd', // Corresponds to 4.svg
        // Add more train lines as needed
      ];
  
      // Find the index of the train line in the trainLines array
      const index = trainLines.indexOf(cardTrain.toLowerCase());
  
      // If the train line is found, return the corresponding icon, else return a default icon or null
      return index !== -1 ? iconSVG[index] : '/train-icons/default.svg';
    };
  
    // Get the icon based on the provided trainLineName
    const iconSrc = getIcon(trainLineName);
  
    // Return the image element with the appropriate src
    return (
      <img id="train-logo" src={iconSrc} alt={`Train logo for ${trainLineName}`} />
    );
  }