import React from 'react';
// Automatically import all icons from the train-icons folder
// const importAll = (r) => r.keys().map(r);
// const icons = importAll(require.context('../train-icons', false, /\.svg$/));
// import trainIcon1 from '../train-icons/1.svg';
// import trainIcon2 from '../train-icons/2.svg';
// import trainIcon3 from '../train-icons/3.svg';
// Import more images as needed
/*
export default function GetIcons({ trainLineName }) {
  // Array of train line names corresponding to each icon
  const trainLines = [
    'a', // Corresponds to 1.svg
    'b', // Corresponds to 2.svg
    'c', // Corresponds to 3.svg
    'd', // Corresponds to 4.svg
    // Add more train lines as needed
  ];

  // Function to get the correct icon based on the train line name
  const getIcon = (cardTrain) => {
    // Find the index of the train line in the trainLines array
    const index = trainLines.indexOf(cardTrain.toLowerCase());

    // If the train line is found, return the corresponding icon, else return a default icon or null
    return index !== -1 ? icons[index] : icons[0]; // Use the first icon as the default or replace with your default icon
  };

  // Get the icon based on the provided trainLineName
  const iconSrc = getIcon(trainLineName);

  // Return the image element with the appropriate src
  return (
    <img id="train-logo" src={iconSrc.default} alt={`Train logo for ${trainLineName}`} />
  );
}
*/
const icons = [trainIcon1, trainIcon2, trainIcon3]; // Add all your imported icons here

export const GetIcons = () => {
  return (
    <div className="train-carts-container">
      {icons.map((iconSrc, index) => (
        <img key={index} src={iconSrc} alt={`Train icon ${index + 1}`} />
      ))}
    </div>
  );
};