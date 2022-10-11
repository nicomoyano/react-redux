import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppReduxSaga from './App.ReduxSaga';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createAsyncStore, createStore } from './store/config/store';

// let store = createStore();
let store = createAsyncStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
