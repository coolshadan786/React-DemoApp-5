import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Event from './components/Event/Event';
// import Form from './components/Form/Form';
// import LogForm from './components/Form/LogForm';
// import CompLogForm from './components/Form/CompLogForm/CompLogForm';
// import Ui from './components/Project/ToDoList/UI';
import IncDec from './components/Project/IncDec/IncDec';
import MaterialUi from './components/Project/MaterialUi/MaterialUi';
import ToDoListMUi from './components/Project/ToDoList_2/ToDoList_MUi';
import Boot from './components/BootReact/Boot';

//For basics UseState of Hooks and digital Clock
// ReactDOM.render( <App />, document.getElementById( 'root' ) );

//For Event UseState of Hooks for Emojii
// ReactDOM.render(<Event />, document.getElementById('root'));

//For Form for data submition
// ReactDOM.render(<Form />, document.getElementById('root'));

//For LoginForm for data submition
// ReactDOM.render(<LogForm />, document.getElementById('root'));

//For LoginForm for data submition
// ReactDOM.render(<CompLogForm />, document.getElementById('root'));

//For ToDo List Small project using component for data submition
// ReactDOM.render(<Ui />, document.getElementById('root'));

//For IncDec List Small project using component for data submition
// ReactDOM.render(<IncDec />, document.getElementById('root'));

//For IncDec List Small project using MaterialUi component for Awesome Icons
// ReactDOM.render( <MaterialUi />, document.getElementById( 'root' ) );

//For ToDo List Small project using MaterialUi component for data submition with Awesome Icons
// ReactDOM.render(<ToDoListMUi />, document.getElementById('root'));

//For Basics about Bootstrap in React
ReactDOM.render(<Boot />, document.getElementById('root'));
