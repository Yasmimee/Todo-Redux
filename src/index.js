import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux'
import Store from './Store'
import { StrictMode } from 'react';


const rootElement = document.getElementById("root");
ReactDOM.render(
 <StrictMode>
 <Provider store={Store}>
    <App />
  </Provider>
  </StrictMode>,
  rootElement
);



