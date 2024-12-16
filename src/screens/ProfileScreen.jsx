import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Main'); // Navigate to the home screen after logout
  };

  return (
    <View style={styles.container}>
      {/* Logout Button */}

      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content}>
        <View style={styles.mainContent}> 

          {/* Static Text (No Typing Effect) */}
          <Text style={{ color: 'green', fontSize: 18 }}>
          Profile
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sidebar: {
    flex: 1,
    marginRight: 20,
  },
  mainContent: {
    flex: 2,
    alignItems: 'center',
    marginTop: 20,
  },
  logout: {
    fontSize: 15,
    marginBottom: 10,
    backgroundColor: "red",
    color: "white",
    padding: 8,
    borderRadius: 10,
    width: 70
  },
});

export default ProfileScreen;