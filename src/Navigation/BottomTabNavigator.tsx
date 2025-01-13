// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Products') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5B61',
          tabBarInactiveTintColor: 'gray',
        })} 
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> 
        <Tab.Screen name="Products" component={ProductScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;