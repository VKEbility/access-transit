import { useEffect, useState } from 'react';

export default function CountdownTimer({ departure, onComplete }) { //creating a live countdown timer for transit departures
  const calcRemainingTime = () => departure - Math.floor(Date.now() / 1000); //calculating remaining seconds until departure by subtracting curr time from departure time
  const [remainingTime, setRemainingTime] = useState(calcRemainingTime()); //holding remaining time in a state var

  useEffect(() => { //getting the remaining time when departure prop changes in parent component
    setRemainingTime(calcRemainingTime()); //updating remaining time for new route card departure
  }, [departure]); //runs when departure changes

  useEffect(() => { //interval that live updates the remaining time every second (1000ms)
    const interval = setInterval(() => { //used to change remainingTime state every sec until it reaches 0
      setRemainingTime((prevTime) => {
        const newTime = prevTime > 0 ? prevTime - 1 : 0; //decrementing time by 1 sec or making it 0
        if (newTime === 0) { //when time is at 0 secs, clearing + exiting interval to prevent neg #
          clearInterval(interval); //stopping the countdown when it reaches 0secs
          if (onComplete) onComplete(); //calling onComplete callback in parent component which will remove the curr route card from the list
        }
        return newTime; //updating remainingTime state with new time
      });
    }, 1000); //setting interval to 1 sec

    return () => clearInterval(interval); //clearing the interval on component unmount/when onComplete state changes
  }, [onComplete]);

  const formatTime = (time) => { //formatting time to render in UI
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    if (minutes > 30) { //if time remaining to departure time is over 30mins long:
      const date = new Date(departure * 1000); //converting time to 12hr time format -> ex. 11:34pm
      return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }); //formatting time as a str
    } else {
      return minutes > 0 ? `${minutes} mins` : `${seconds} secs`; //otherwise, show remaining time in mins or secs
    }
  };

  return (
    <div className="departure-time">
      <p>{formatTime(remainingTime)}</p>
    </div>
  );
}