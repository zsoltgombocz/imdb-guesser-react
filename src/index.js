import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import { LoaderProvider } from './states/LoaderContext';
import { UserProvider } from './states/UserContext'
import { AlertProvider } from './states/AlertContext'
import { GameProvider } from './states/GameContext'
import Game from './views/Game';

ReactDOM.render(
  <LoaderProvider>
  <UserProvider>
  <AlertProvider>
  <GameProvider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </GameProvider>
  </AlertProvider>
  </UserProvider>
  </LoaderProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
