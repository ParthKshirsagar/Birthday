import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './App.css'

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse("birth date here") - Date.now();

    setDays(formatTime(Math.floor(time / (1000 * 3600 * 24))));
    setHours(formatTime(Math.floor(time / (1000 * 3600) % 24)));
    setMinutes(formatTime(Math.floor(time / (1000 * 60) % 60)));
    setSeconds(formatTime(Math.floor(time / 1000) % 60));
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    getTime();
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  if(days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0){
    return(
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-8">Vadh divsasathi vel baki 😊</h1>
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <p className="text-4xl font-bold">{days}</p>
            <p className="text-gray-500">Days</p>
          </div>
          <div className="flex flex-col items-center mr-4">
            <p className="text-4xl font-bold">{hours}</p>
            <p className="text-gray-500">Hours</p>
          </div>
          <div className="flex flex-col items-center mr-4">
            <p className="text-4xl font-bold">{minutes}</p>
            <p className="text-gray-500">Minutes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">{seconds}</p>
            <p className="text-gray-500">Seconds</p>
          </div>
        </div>
      </div>
    )
  } else{
    return(
      <div className="w-screen h-screen flex justify-center align-middle" id="body">
        <Confetti />
      <div class="container">
        <div class="cake">
          <div class="candle"></div>
          <div class="top-layer"></div>
          <div class="middle-layer"></div>
          <div class="bottom-layer"></div>
        </div>
        <h1 className='text-center bottom-0 relative top-6 font-medium text-3xl'>Happy Birthday "Name here"</h1>
      </div>
      </div>
    )
  }
}

export default App;
