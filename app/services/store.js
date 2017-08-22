import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import testReducer from '../services/reducers/reducers';

const store = createStore(
     testReducer,
     applyMiddleware(logger, thunk)
);

export default store;