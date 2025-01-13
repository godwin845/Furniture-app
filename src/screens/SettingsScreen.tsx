import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Main'); // Navigate to the home screen after logout
  };

  return (
    <View className='flex-1 p-5'>
      {/* Logout Button */}

      <TouchableOpacity onPress={handleLogout}>
        <Text className='text-base mb-2 bg-red-600 text-white p-2 rounded-lg w-20'>Logout</Text>
      </TouchableOpacity>

      <ScrollView>
        <View className='flex-1 items-center mt-5'> 

          {/* Static Text (No Typing Effect) */}
          <Text className='text-green-500 text-lg'>
            User Settings
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;