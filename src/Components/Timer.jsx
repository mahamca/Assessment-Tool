import React, { useState, useEffect } from 'react';

const Timer = ({ initialMinutes }) => {
  // Convert initial minutes to seconds
  const initialSeconds = initialMinutes * 60;
  
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false); // Timer starts automatically

  useEffect(() => {
    let intervalId;
    
    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      setIsActive(false); // Stop the timer when it reaches 0
      clearInterval(intervalId);
    }

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
    setIsActive(true); // Restart the timer
  };

const start=()=>{
  setIsActive(true)
}
  return (
    <div>
      <h1>Timer</h1>
      <p>{formatTime(seconds)}</p>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={start}>start</button>
    </div>
  );
};



export default Timer;
