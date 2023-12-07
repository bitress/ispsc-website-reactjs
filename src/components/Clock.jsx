import React, { useState, useEffect } from 'react';


function Clock ()  {
    const [formattedTime, setFormattedTime] = useState('');
  
    const updateClock = () => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
  
      const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
      setFormattedTime(formattedTime);
    };
  
    useEffect(() => {
      updateClock(); 
  
      const intervalId = setInterval(() => {
        updateClock(); 
      }, 1000);
  
      return () => clearInterval(intervalId); 
    }, []);
  
    return (
      <div>
       {formattedTime}
      </div>
    );
  };
  

  export default Clock;