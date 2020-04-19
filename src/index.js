import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reducer from "./reducer";
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});
const store = createStore(reducer, {data: null}, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers, if any
));

console.log('store', store);

const ProvidedApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(<ProvidedApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
