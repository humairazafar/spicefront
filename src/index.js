import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import BrowserRouter Component and rename it Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(

  //Wrap our app component inside router so App and children can use router
  //pass app component into Route to give it access to router props
  <Router>
    <React.StrictMode>
    <Route path="/" component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
