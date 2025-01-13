import React from 'react';
import { Text } from 'react-native'; // Import the Image component
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/RegisterScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import DashboardStack from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main" // Set initial route here
      screenOptions={{
        headerTitle: () => ( 

          <Text style={{ fontSize: 18 }}>FURN <Text style={{ color: '#FF5B61'}}>ITURE</Text></Text>
          // <Image
          //   source={require('../../assets/p1.jpg')} // Replace with your logo's path
          //   style={{ width: 100, height: 40, resizeMode: 'contain' }} // Adjust size as needed
          // />
        ),
        headerStyle: {
          backgroundColor: 'white', // Set a background color for the header (optional)
        },
        // headerTitleAlign: 'center',
        headerShadowVisible: false, // Optional: To hide shadow under the header
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardStack} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerLeft: null }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;