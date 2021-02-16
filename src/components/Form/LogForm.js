import React, { useState } from 'react';
import './Form.module.css';
const LogForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [LasName, setLasName] = useState('');
  const inputEvent = (event) => {
    console.log('Input Feild is Clicked');
    console.log('Event ' + event.target.value);
    setName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLasName(lastName);
  };
  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {/* <h1>Hello Mr.Cool {name}</h1> */}
          <h1>
            Hello Mr.Cool => {fullName} {LasName}
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputEvent}
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Lastname"
            onChange={inputEventTwo}
            value={lastName}
          />
          <br />
          <button type="submit">Click Me 👍</button>
        </div>
      </form>
    </div>
  );
};

export default LogForm;
