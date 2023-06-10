import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer
    >
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
            backgroundColor:'green',
    
        },
        headerTintColor:'orange',
        headerTitlestyle:{
          fontSize:15,
        }
    
    }}
      initialRouteName="LoginScreen" headerShown="false">
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
        options={{
          title:"User Login",
          headerStyle:{
              backgroundColor:'blue',
      
          },
          headerTintColor:'orange',
          headerTitlestyle:{
            fontSize:15,
          }
      
      }}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
