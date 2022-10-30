import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import OurProvider from "./context/context";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

    <Provider store={ store }>

      <BrowserRouter>
        
        <OurProvider>

          <App />

        </OurProvider>
    
    </BrowserRouter>

    </Provider>

  // </React.StrictMode>
);