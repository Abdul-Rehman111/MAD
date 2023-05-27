import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground} from 'react-native';

const LockScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUnlock = () => {
    navigation.navigate('HomeScreen');
  };

  const handleSignup = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <ImageBackground source={require("./images.jpg")} style={{height:'100%',width:'100%'}} >   
     <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email" placeholderTextColor={'yellow'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password" placeholderTextColor={'yellow'}
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
    borderWidth:4,
  },
});

export default LockScreen;
