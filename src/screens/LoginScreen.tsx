import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for navigation prop
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

// Define the LoginScreen component with typed props
const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    // Validate the input
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      // Send a POST request to the login API
      const response = await axios.post('http://192.168.56.73:5000/api/auth/login', {
        email,
        password,
      });

      // Check if the login was successful (response.status could vary depending on your API)
      if (response.status === 200) {
        console.log('Login successful');
        // Navigate to the 'Main' screen after successful login
        navigation.navigate('Main');
      } else {
        // If login fails, show an error
        Alert.alert('Error', 'Invalid email or password. Please try again.');
      }
    } catch (error) {
      // Handle errors, such as network issues or server problems
      console.error('Login error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-4xl text-white mb-5">
        FURN <Text className="text-red-500">ITURE</Text>
      </Text>
      <View className="px-5 py-4 rounded-lg w-4/5 items-center">
        <Text className="text-2xl text-white mb-5">Login</Text>

        <TextInput
          className="w-11/12 p-3 rounded-full bg-white mb-4"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          className="w-11/12 p-3 rounded-full bg-white mb-4"
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity
          className="bg-red-500 rounded-full w-11/12 p-3 items-center justify-center"
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg font-semibold">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Forgot Password Pressed')}>
          <Text className="text-red-500 mt-3 text-center">Forgot Password?</Text>
        </TouchableOpacity>

        <Text className="text-red-500 mt-3 text-center">Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text className="text-red-500 mt-2 text-center">Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;