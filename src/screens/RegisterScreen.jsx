import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert('Validation Error', 'Please fill out all fields.');
      return;
    }
    
    setLoading(true);
    try {
      // Making the POST request to the registration API
      const response = await axios.post('http://192.168.56.73:5000/api/auth/register', {
        name,  // Include name in the request
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
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response) {
        // If the error is from the server (e.g., validation error)
        Alert.alert('Registration Failed', error.response.data.message || 'Please try again later.');
      } else if (error.request) {
        // If there was a problem with the request (e.g., no internet)
        Alert.alert('Network Error', 'Please check your internet connection and try again.');
      } else {
        // Unknown error
        Alert.alert('Error', 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);  // Stop the loading state
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 35, bottom: 40 }}>FURN <Text style={{ color: '#FF5B61'}}>ITURE</Text></Text>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Register</Text>

        {/* name input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}  // Update name state
          autoCapitalize="none"
        />
        
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

        <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Registering...' : 'Register'}</Text>
        </TouchableOpacity>

        <Text style={styles.link}>Have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login here</Text>
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
    borderRadius: 25,
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
    borderRadius: 5,
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

export default RegisterScreen;