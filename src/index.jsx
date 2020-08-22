import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});
const store = createStore(reducers, { data: null }, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers, if any
));

// eslint-disable-next-line no-console
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
