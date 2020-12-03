import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/repositories";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk ))
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
