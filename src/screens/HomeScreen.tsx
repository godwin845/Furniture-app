import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = () => {
  return (
    <View className='bg-black flex-1 items-center justify-center p-5'>
              <View className='p-5 rounded-2xl'>
          <Text className='text-white mb-5 text-3xl'>
            Welcome to <Text className='text-red-500'>FURNITURE</Text>
          </Text>
          <Text className='text-xl text-white'>
            <Text className='text-red-500'>We</Text> invite you to{' '}
            <Text className='text-red-500'>explore</Text> our products and{' '}
            <Text className='text-red-500'>discover</Text> the perfect pieces
            to <Text className='text-red-500'>elevate</Text> your home.
          </Text>
        </View>
    </View>
  );
};

export default HomeScreen;
