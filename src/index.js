import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store/reducers/repositories";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const saveToLocalStore = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStore = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};

const persistedState = loadFromLocalStore();

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

store.subscribe(() => saveToLocalStore(store.getState()));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
