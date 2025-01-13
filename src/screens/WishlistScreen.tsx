import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Main'); // Navigate to the home screen after logout
  };

  return (
    <View className='flex-1 p-5'>

      <TouchableOpacity onPress={handleLogout}>
        <Text className='text-sm mb-2 bg-red-600 text-white p-2 rounded-lg w-16'>Logout</Text>
      </TouchableOpacity>

      <ScrollView>
        <View className='flex-1 items-center mt-5'> 

          {/* Static Text (No Typing Effect) */}
          <Text className='text-green-500 text-lg'>
          Wishlist
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default WishlistScreen;