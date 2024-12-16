import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default AboutScreen