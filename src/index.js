import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios"
import AuthenticationService from './components/TodoApp/AuthenticationService'


axios.interceptors.request.use(
  (req) => {
      if(AuthenticationService.isUserLoggedIn()){
        req.headers.Authorization = AuthenticationService.getAuthItem()
      }
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);