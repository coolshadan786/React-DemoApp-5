import React, { useState } from 'react';
import classes from './IncDec.module.css';
const IncDec = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('Sorry, Zero Limit Reached');
      setNum(0);
    }
  };
  return (
    <>
      <div className={classes.main_div}>
        <div className={classes.center_div}>
          <h1>{num}</h1>
          <div className={classes.btn_div}>
            <button onClick={incNum}>Increm</button>
            <button onClick={decNum}>Decrem</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncDec;
