import React, { useState } from 'react';
import './CompLogForm.module.css';
const CompLogForm = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const inputEvent = (event) => {
    console.log('Input Feild is Clicked');
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      //2nd Mtdh is very easy way to write multiple feild using spred operator
      return {
        ...preValue,
        [name]: value,
      };

      //1st Mtdh is used to write multiple feild using if operator is lines consuming

      //   if (name === 'fName') {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === 'lName') {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === 'email') {
      //     return {
      //       fname: preValue.email,
      //       lname: preValue.lname,
      //       email: value,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === 'phone') {
      //     return {
      //       fname: preValue.phone,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: value,
      //     };
      //   }
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          {/* <h1>Hello Mr.Cool {name}</h1> */}
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input
            type="text"
            placeholder="Enter your name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fName}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Lastname"
            name="lname"
            onChange={inputEvent}
            value={fullName.lName}
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Enter your mobile no."
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
            autoComplete="off"
          />
          <br />
          <button type="submit">Click Me 👍</button>
        </div>
      </form>
    </div>
  );
};

export default CompLogForm;
