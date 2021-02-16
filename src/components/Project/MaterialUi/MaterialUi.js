import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import classes from './MaterialUi.module.css';
const MaterialUi = () => {
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
            <Tooltip title="Add">
              <Button onClick={incNum} className={classes.btn_green}>
                <AddCircleIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decNum} className={classes.btn_red}>
                <DeleteForeverTwoToneIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialUi;
