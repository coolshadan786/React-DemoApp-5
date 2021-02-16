import React, { useState } from 'react';
import ListData from './ListData';
import toDoCss from './Ui.module.css';
const Ui = () => {
  const [inputList, setInputList] = useState('');
  const [items, setListItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setListItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
  const deleteItems = () => {
    console.log('delted');
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
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemValue, index) => {
              //1st mtdh
              {
                /* return <li>{itemValue}</li>; */
              }
              //2nd mtdh
              {
                /* return (
                <ListData
                  key={index}
                  id={index}
                  text={itemValue}
                  onSelect={deleteItems}
                /> 
              );*/
              }
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Ui;
