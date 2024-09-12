import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import CarListScreen from './screens/CarListScreen';
import CarDetailScreen from './screens/CarDetailScreen';
import BookingScreen from './screens/BookingScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from "./screens/RegisterScreen";

const Stack  = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Cars" component={CarListScreen}/>
        <Stack.Screen name="CarDetails" component={CarDetailScreen}/>
        <Stack.Screen name="BookCar" component={BookingScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

