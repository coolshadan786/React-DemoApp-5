import React, { useState } from 'react';
import './Form.module.css';
const Form = () => {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState();
  const inputEvent = (event) => {
    console.log('Input Feild is Clicked');
    console.log('Event ' + event.target.value);
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <div>
      <div>
        {/* <h1>Hello Mr.Cool {name}</h1> */}
        <h1>Hello Mr.Cool {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputEvent}
          value={name}
        />
        <br />
        <button onClick={onSubmit}>Click Me 👍</button>
      </div>
    </div>
  );
};

export default Form;
