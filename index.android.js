import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Provider} from 'react-redux';
import App from './app/containers/App.js';
import store from './app/reducers/index.js'


export const Dietii = () => {
  return (<Provider store={store}>
    <App/>
  </Provider>
  );
};


AppRegistry.registerComponent('Dietii', () => Dietii);
