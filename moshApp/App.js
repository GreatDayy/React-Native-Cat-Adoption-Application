import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './app/screens/BookListScreen';
import DetailScreen from './app/screens/DetailScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import DissappearScreen from './app/screens/DissappearScreen';
import NavigationScreen from './app/screens/NavigationScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="BookListScreen">
      <Stack.Screen
      options={{ 
        title: 'Cats Category',
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        }

       
       }}
       name="BookListScreen"
       component={BookListScreen} />
       
       <Stack.Screen 
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'Cat',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
       />

<Stack.Screen 
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'ProfileScreen',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
       />

<Stack.Screen 
        name="NavigationScreen"
        component={NavigationScreen}
        options={{
          title: 'Dissappear',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
       />

<Stack.Screen 
        name="DissappearScreen"
        component={DissappearScreen}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
          },
        }}
       />
    </Stack.Navigator>
  </NavigationContainer>
  );
}