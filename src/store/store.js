import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const mergeMiddlewares = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, mergeMiddlewares(applyMiddleware(...middleware)));

export default store;
