import React, { useState } from 'react';
import event from './Event.module.css';

const Event = () => {
  const purple = '#8e44ad';
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('Click Me');

  const bgChange = () => {
    console.log('Clicked');
    let newBg = '#34495e';
    setBg(newBg);
    setName('Done!! 👍');
  };

  const backBg = () => {
    console.log('Double Clicked');
    setBg(purple);
    setName('Volla !!! 🥇');
  };
  return (
    <>
      {/* <div className={event.back}> */}
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={backBg}>
          {name}
        </button>
      </div>
    </>
  );
};

export default Event;
