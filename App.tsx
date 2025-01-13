import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';  // Update the path as needed
import StackNavigator from './src/Navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import './global.css';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;