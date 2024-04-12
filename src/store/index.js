import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import produceReducer from './produce.js';
import cartReducer from './cart.js';
import checkoutReducer from './checkout.js';

const rootReducer = combineReducers({
    produce: produceReducer,
    cart: cartReducer,
    checkout: checkoutReducer
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
