import React from 'react';
import ReactDOM from 'react-dom/client';

function MyThing(){
  /*return(
   /*<div className='book'>
    <div className='title'>
         The Title
    </div>
    <div className='author'>
         The Author
    </div>
    <ul className='stats'>
       <li className='rating'>
        5 stars
       </li>
       <li className='isbn'>
        12-345678-910
       </li>
    </ul>
   </div>*/
 /* <div>
    Empty
    Newline
    Test
     &nbsp;Non-breaking
    &nbsp;spaces&nbsp;
    Line 1
    {' '}
    Line 2
   </div>
  /* <div>
    &nbsp;Non-breaking
    &nbsp;spaces&nbsp;
    {' '}
    Line 1
    Line 2 
   </div>*/   
  //);
 return [
  React.createElement(
    'div',
    {className :'title'},
    'The Title',
  ),
  React.createElement(
    'div',
    {className:'author'},
    'The Author'
  ),
  React.createElement(
    'ul',
    {className:'stats'},
    React.createElement(
      'li',
      {className:'rating'},
       '5 Stars'
    ),
    React.createElement(
      'li',
      {className:'isbn'},
      '12-345678-910'
    )
  ),
  React.createElement(
    'span',
    {},
    'Finalised'
  ),
 ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyThing/>,
  ///document.querySelector('#root');
);
/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
