import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <View style={styles.container}>

      <Text style={{ color: "white", fontSize: 35, bottom: 40 }}>FURN <Text style={{ color: '#FF5B61'}}>ITURE</Text></Text>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Forgot Password Pressed')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loginBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  link: {
    color: '#FF5B61',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5B61',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;