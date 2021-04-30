import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import kegListReducer from "./components/redux/reducers/kegListReducer";

const store = createStore(kegListReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
