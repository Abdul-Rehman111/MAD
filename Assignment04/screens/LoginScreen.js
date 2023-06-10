import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LockScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedEmail && storedPassword) {
        navigation.navigate('HomeScreen');
      }
    } catch (error) {
      console.log('Error retrieving authentication details: ', error);
    }
  };

  const handleUnlock = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Error saving authentication details: ', error);
    }
  };

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <ImageBackground source={require("./images.jpg")} style={{ height: '100%', width: '100%' }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'yellow'}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'yellow'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Login"
          onPress={handleUnlock}
          color="red" // Customize the login button color
        />
        <Button
          title="Sign Up"
          onPress={handleSignup}
          color="red"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderWidth: 4,
  },
});

export default LockScreen;
