import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Countercontextprovider } from './context/CounterContext';
import {TitleColorContextProvider } from './context/TiteleColorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Countercontextprovider>
      <TitleColorContextProvider>
        <App/>
    </TitleColorContextProvider>
    </Countercontextprovider>
  </React.StrictMode>
);


reportWebVitals();
