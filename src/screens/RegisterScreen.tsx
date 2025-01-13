import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { NavigationProp } from '@react-navigation/native';

interface RegisterScreenProps {
  navigation: NavigationProp<any>; // You can replace 'any' with the actual type of your navigation stack
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert('Validation Error', 'Please fill out all fields.');
      return;
    }

    setLoading(true);
    try {
      // Making the POST request to the registration API
      const response: AxiosResponse<any> = await axios.post('http://192.168.56.73:5000/api/auth/register', {
        name,
        email,
        password,
      });

      // Check if registration was successful
      if (response.status === 200) {
        Alert.alert('Registration Successful', 'You have successfully registered!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') },
        ]);
      } else {
        Alert.alert('Registration Failed', 'There was an error with your registration. Please try again.');
      }
    } catch (error: any) {
      console.error('Error during registration:', error);
      if (error.response) {
        Alert.alert('Registration Failed', error.response.data.message || 'Please try again later.');
      } else if (error.request) {
        Alert.alert('Network Error', 'Please check your internet connection and try again.');
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);  // Stop the loading state
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white text-4xl mb-4">
        FURN <Text className="text-red-600">ITURE</Text>
      </Text>
      <View className="px-5 py-8 rounded-lg w-4/5 items-center">
        <Text className="text-white text-2xl mb-4">Register</Text>

        <TextInput
          style={{}}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
          className="w-11/12 py-2 px-4 rounded-full bg-white mb-4"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          className="w-11/12 py-2 px-4 rounded-full bg-white mb-4"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          className="w-11/12 py-2 px-4 rounded-full bg-white mb-4"
          autoCapitalize="none"
        />

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          className={`bg-red-600 rounded-lg w-11/12 py-3 items-center ${loading ? 'opacity-50' : ''}`}
        >
          <Text className="text-white font-bold">{loading ? 'Registering...' : 'Register'}</Text>
        </TouchableOpacity>

        <Text className="text-red-600 mt-4 text-center">Have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-red-600 text-center">Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;