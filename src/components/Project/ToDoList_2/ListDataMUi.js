import React from 'react';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import toDoCss from './ToDoListMUi.module.css';
const ListDataMUi = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <>
      <div className={toDoCss.todo_style}>
        <span onClick={cutIt}>
          <DeleteIcon className={toDoCss.deleteIcon} />
        </span>
        <li style={{ textDecoration: line ? 'line-through' : 'none' }}>
          {props.text}
        </li>
        ;
      </div>
    </>
  );
};

export default ListDataMUi;
