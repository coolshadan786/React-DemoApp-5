import React, { useState } from 'react';

//1st mtdh using useState by hands on practice
// const App = () => {
//   const state = useState();
//   // console.log(state);

//   let [count, setCount] = useState(0);

//   const IncNum = () => {
//     setCount(count + 1);
//     console.log('clicked');
//   };
//   return (
//     <>
//       <h1>You Clicked => {count} </h1>
//       <button onClick={IncNum}>Click Me</button>
//     </>
//   );
// };

// export default App;

//1st mtdh using useState and useEffect from google
// import React, { useState, useEffect } from 'react';

// function CounterExample() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
// export default CounterExample;

//Challenge Number = 1 for time useState by hands on practice

// const Time = () => {
//   let newTime = new Date().toLocaleTimeString();

//   const [cTime, setCtime] = useState(newTime);
//   const updateTime = () => {
//     let newCTime = new Date().toLocaleTimeString();
//     setCtime(newCTime);
//   };
//   return (
//     <>
//       <h1>{cTime}</h1>
//       <button onClick={updateTime}>Get Time</button>
//     </>
//   );
// };

//Challenge Number = 2 for time useState by hands on practice

const Time = () => {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, setCtime] = useState(newTime);
  const updateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <h1>{cTime}</h1>
    </>
  );
};
export default Time;
