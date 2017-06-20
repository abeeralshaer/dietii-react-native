import {combineReducers} from 'redux';
import * as userReducers from './user.js';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';



const reducers = combineReducers(
  {
    nav  :userReducers.navReducer

  });
const loggerMiddleware = createLogger({predicate: (getState,action) => __DEV__});

const configureStore = (initialState)=> {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(reducers,initialState,enhancer);
};

const store = configureStore({});

export default store;
