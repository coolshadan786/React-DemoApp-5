import React from 'react';

const ListData = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={props.deleteItems}
        />
        <li>{props.text}</li>;
      </div>
    </>
  );
};

export default ListData;
