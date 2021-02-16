import React, { useState } from 'react';
import toDoCss from './ToDoListMUi.module.css';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListDataMUi from './ListDataMUi';

const ToDoListMUi = () => {
  const [item, setItem] = useState('By an apple');
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem('');
  };
  return (
    <>
      <div className={toDoCss.main_div}>
        <div className={toDoCss.center_div}>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Items"
            onChange={itemEvent}
            value={item}
          />
          <Button className={toDoCss.newBtn} onClick={listOfItems}>
            <AddCircleIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, index) => {
              return <ListDataMUi text={val} key={index} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};
export default ToDoListMUi;
