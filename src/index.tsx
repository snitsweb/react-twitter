import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
          <Router>
              <Provider store={store}>
                  <App />
              </Provider>
          </Router>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
