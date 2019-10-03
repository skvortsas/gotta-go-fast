import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const storage = createStore(allReducers);

console.log('hints: select a character; to move press arrows');

ReactDOM.render(
    <Provider store={storage}>
        <App />
    </Provider>, 
    document.getElementById("root")
);